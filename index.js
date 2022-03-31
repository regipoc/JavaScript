let myTodosList = [];

const myContainer = document.querySelector('.container');
let myInput = document.querySelector('input');
let myBtn = document.querySelector('button');
const myProgressLabel = document.querySelector('.progress-label');
const removeAllBtn = document.querySelector('#all');

const myProgressBar = document.querySelector('progress')
const myToDoUl = document.createElement('ul');
myContainer.appendChild(myToDoUl);

let totalNumberOfTodos = 0;
let completedTodos = 0;
let percentOfCompetedTasks = 0;


function calculateNumberOfAllTodos(){
  totalNumberOfTodos = document.querySelectorAll('li').length;
}
function calculateNumberOfCompletedTodos(){
  completedTodos = document.querySelectorAll('.atlikta').length
}

function updateNumberValues() {
  myProgressLabel.innerHTML = `${completedTodos} of ${totalNumberOfTodos}`
}

function updateProgressBar() {
  percentOfCompetedTasks = Math.floor(completedTodos === 0 ? 0 : (completedTodos / totalNumberOfTodos) * 100 );
  myProgressBar.value = percentOfCompetedTasks;
}
function checkboxListener(event) {
  let jobThatImEditing = event.target.nextElementSibling.textContent
    console.log(jobThatImEditing)
  myTodosList.forEach(job => 
    job.todo === jobThatImEditing ? job.done = !job.done : job)
  event.target.parentElement.classList.toggle('atlikta')
  
  calculateNumberOfCompletedTodos()
  updateNumberValues()
  updateProgressBar()
}

function deleteEventListener(event) {
  let currentValue = event.target.parentNode.textContent;
  myTodosList.forEach((job, index) => 
  (job.todo === currentValue ? myTodosList.splice(index, 1) : job) )

  event.target.parentElement.remove();
  calculateNumberOfCompletedTodos()
  calculateNumberOfAllTodos()
  updateNumberValues()
  updateProgressBar()
}



function editEventListener(event){
  let oldValue = event.target.parentNode.textContent;
  let hiddenInput = event.target.parentNode.querySelector('input[type=text]')
  let currentSpan = event.target.parentNode.querySelector('span')
    myTodosList.forEach(job => 
    job.todo === oldValue ? job.todo = hiddenInput.value : job)
    
    currentSpan.classList.toggle('hidden');
    hiddenInput.classList.toggle('hidden')
    currentSpan.innerText = hiddenInput.value
}

function inputEditOnEnter(event) {
  let hiddenInput = event.target.parentNode.querySelector('input[type=text]')
  let currentSpan = event.target.parentNode.querySelector('span')
  if (event.code === 'Enter') {
    currentSpan.classList.toggle('hidden');
    hiddenInput.classList.toggle('hidden')
    currentSpan.innerText = hiddenInput.value
    }
}

// {todo: 'Mano darbas', done: false}
function createJobsFromLsData(job) {
const myLi = document.createElement('li');
// neleidzia deti tuscios klases, kaip isspresti?
let className = job.done ? 'atlikta' : 'neatlikta';
myLi.classList.add(className)

const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.addEventListener('click', checkboxListener)
// job = {todo: 'Tekstas', done: false}
checkbox.checked = job.done

const span = document.createElement('span');
span.textContent = job.todo

const editField = document.createElement('input');
editField.classList.add('hidden');
editField.value = job.todo;
editField.setAttribute('type', 'text');
editField.addEventListener('keydown', inputEditOnEnter)

const editIcon = document.createElement('i');
const editClassList = ['bi', 'bi-pencil-fill']
editIcon.classList.add(...editClassList);
editIcon.addEventListener('click', editEventListener)

const deleteIcon = document.createElement('i');
const deleteClassList = ['bi', 'bi-trash-fill'];
deleteIcon.classList.add(...deleteClassList);
deleteIcon.addEventListener('click', deleteEventListener)

myLi.appendChild(checkbox);
myLi.appendChild(span);
myLi.appendChild(editField);
myLi.appendChild(deleteIcon);
myLi.appendChild(editIcon);


myToDoUl.appendChild(myLi);

calculateNumberOfAllTodos();
calculateNumberOfCompletedTodos();
updateNumberValues()
updateProgressBar()
}


window.onload = function() {
  let toDosFromLS = JSON.parse(localStorage.getItem('darbai'));
  // ['carbas1', 'darbas2'] // kiekvienas darbas yra objektas
  toDosFromLS.forEach(item => createJobsFromLsData(item))
  myTodosList = [...toDosFromLS]
};

function addNewTodo() {
  let job = {
    // galetumee prideti id, kuri sugeneruotumeme atsitiktine tvarka
    // naudodami savo funkcija ir elementu ieskoti pagal originalu id
    // taip isvengtumeme problemu su darbais kurie turi ta pati teksta
    todo: myInput.value,
    done: false
  }
  myTodosList.push(job)
  createJobsFromLsData(job)
  myInput.value = ''
}

myBtn.addEventListener('click', addNewTodo);
removeAllBtn.addEventListener('click', function() {

  let newCOmpletedTodos = myTodosList.filter(job => job.done !== true)

  let allCompletedTasks = document.querySelectorAll('.atlikta');
  allCompletedTasks.forEach(item => item.remove());
  totalNumberOfTodos = document.querySelectorAll('li').length;
  completedTodos = 0
  updateNumberValues()
  myProgressBar.value = 0;
  myTodosList = [...newCOmpletedTodos]
})


window.addEventListener("beforeunload", function(){
  localStorage.setItem('darbai', JSON.stringify(myTodosList))
})













