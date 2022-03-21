/* //Skaičiai
//1+2
let naujiMetai=25;

naujiMetai=naujiMetai + 5;
//yra tas pats
naujiMetai+=5;
let metai=2022;
let senesniMetai=2000;
let skirtumas=metai-senesniMetai;
// du kintamieji su skaičiais
let dienos = 30;
let savaites = 4;
console.log('Hello world');
let skaičius =20;
kitasSkaičius = 7;
let liekana = skaičius % kitasSkaičius
console.log(skaičius % kitasSkaičius)
console.log(liekana)
let name = 'Regina';
let othername = 'Pociuviene';
let gimimometai = '1977';
let dabartiniaimetai = 2022;
atsakymas = `${name} ${othername} man yra ${dabartiniaimetai - gimimometai}`
console.log(atsakymas);
let kitasVardas = 'Mano vardas Yra';
console.log(kitasVardas.charAt(5));
 */

/* let data = 1;
if (data>2) console.log (true);
if (data<2) console.log (false); */

/* let ivestaSuma = prompt('Jusu moketina suma yra:')
let arbatpinigiai = 0;
let galutinesuma;

if (ivestaSuma <= 20) {
  arbatpinigiai = ivestaSuma  * 0.1;
} else if ( 20 < ivestaSuma && ivestaSuma <= 50) {
  arbatpinigiai = ivestaSuma * 0.075;
} else {
  arbatpinigiai = ivestaSuma * 0.05
}
galutinesuma = `Visa sumoketa suma ${ivestaSuma + arbatpinigiai}
 arbatpinigiai yra ${arbatpinigiai} saskaita buvo ${ivestaSuma}
`
console.log(galutinesuma) */

/* let number = parseInt(prompt('enter the number'));
switch(number) {
    case 1:
    console.log('print 1')
    break;
    case 2:
    console.log('print 2')
    break;
    default:
    console.log('print default')
}
    
const baldai = ["lempa", "lentynos", "sofa", "stalas"];
    baldai.shift("lempa");
    console.log(baldai)
    baldai.unshift("spintele", "kede");
    console.log(baldai)

// FOR LOOP
for (let i=1; i <= 0; i++){
  console.log(i) */

/* //uzduotis parasyti loop kuris prades grazinti skaicius nuo 0 iki 20 ir is skaiciu atims 4, paskutinis kaicius 0.
let skaicius = 1;
for (let i = 20; i >=0; i = i - 4){
console.log(i)
} */

//uzduotis parasyti loop, kuris isspausdins i konsole visus lyginius skaicius nuo i iki 17
/* const Skaičiai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17]
for (let i = 0; i <= Skaičiai.length -1; i++) {
  if(Skaičiai [i] % 2 ===0 )
  console.log(Skaičiai [i]) */

//kaip isvesti visas reiksmes i konsole, pradedant nuo paskutines
/* const myArr = ["One", "Two", "Sofa", "Stalas", "test"]
for (let i = myArr.length-1; i >=0; i--) {
  console.log(myArr[i]);
} */
// kaip pereiti per visa array ir isvesti i console skaicius kurie didesni uz 8.
/* const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const daugiauneiAstuoni = [];
for (let i = 0; i <=skaiciai.length; i++) {
  if (skaiciai [i] >8){
    daugiauneiAstuoni.push(skaiciai [i])
  }
}
console.log (daugiauneiAstuoni) */

// naudojantis for loop'u surasti didziausia skaiciu
/* const numberArr = [2, 45,3, 67, 34, 567, 34, 345, 123];
let didziausiasSkaicius = 0;
for (let i = 0; i <= numberArr.length -1; i++){
if (didziausiasSkaicius < numberArr[i]){
didziausiasSkaicius = numberArr[i];
}
} */
// Nested loops
/* for (let isorinis = 1; isorinis <= 4; isorinis++){
  console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
  for(let vidinis = 1; vidinis < 5; vidinis++) {
    console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
  }
} */

//uzduotis isivesti i console visas reiksmes nurodyti kokios eilutes reiksmes isvedama
/* const activities = [
  ["work, 9"],
  ["eat", 1],
  ["commute", 2],
  ["play game", 1],
  ["sleep", 7]
]; */
/* for (let i = 0; i < activities.length; i++) {
  console.log("Eitule ${i+1}")
  for (let j = 0; j < activities[i].length; j++){
    console.log(activities[i][j])
  }
  } */

  /*
  const SLAPTAS_SKAICIUS = 52;
  let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
  while(spejimas !== SLAPTAS_SKAICIUS) { // false
    spejimas = parseFloat(prompt('Spekite skaiciu'));
  }
  */

 /*  const skaiciai2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const skaic3 =[]
 for (let i of skaiciai2){ 
     console.log(i**2)
 }
 for (let i of skaiciai2){ 
    console.log(i**2)
    skaic3.push(i**2)
}
 */
 //for (let i of skaiciai2) {
   // console.log(i)
 // }

 /* const todoList = ["Pradeti nuo q komandos", 
  "panaudoti prompt, kad gauti duomenis", 
  "panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos"
  ];
let vartotojoIvestaKomanda = prompt("Kokia yra jusu sekanti komanda")
while(vartotojoIvestaKomanda !== "quit") {
  if (vartotojoIvestaKomanda === "new") {
    let naujasDarbas = prompt("Iveskite nauja darba i darbu sarasa");
    todoList.push(naujasDarbas);
    vartotojoIvestaKomanda = prompt("Kokia yra jusu sekanti komanda");
  } else if (vartotojoIvestaKomanda === "list") {
    console.log(`Jusu darbu sarasas:`);
    for (let i = 0; i < todoList.length; i++) {
      console.log(`----------------------`);
      console.log(`${i} - ${todoList[i]}`);
      console.log(`----------------------`);
    } 
    vartotojoIvestaKomanda = prompt("Kokia yra jusu sekanti komanda");
  } else if (vartotojoIvestaKomanda === 'delete') {
    let index = parseInt(prompt("Iveskite norimo istrinti darbo numeri"));
    todoList.splice(index, 1)
    vartotojoIvestaKomanda = prompt("Kokia yra jusu sekanti komanda")
  } else {
    vartotojoIvestaKomanda = "quit"
    console.log("Ivesta neteisinga komanda")
  }
} */
//FUNKCIJOS
/* function duSkaiciai(skaicius, laipsnis) {
  console.log(skaicius ** laipsnis)
  duSkaiciai(5, 4)

  function atiduotiDidesni(a, b){
    //if (a >b){
    // console.log(a)
    //}elseif (a < b){
    //   console.log(b)
    //} else {
    //  console.log("skaicia yra lygus")
    //}
    console.log(Math.max(a,b))
  }
}
   */
// kokiaTaiDiena(8)
// Parasyti funkcija kuri priims dienos numeri 1, 2, ... 7
// ivedus 1 funkcija turetu isspausdinti pirmadienis 
// 2 - antradienis ir t.t.
/* function kokiaTaiDiena(num){
  if (num === 1) {
    console.log('Siandien yra pirmadienis');
  } else if (num === 2) {
    console.log('Siandien yra antradienis');
  } else {
    console.log('Savaiteje tokios dienos nera')
  }
}
console.log (getDay) */

//Uzduotis susumuoti visus skaicius masyve. 
/* const sudetiVisusSkaicius = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]

function sudetiVisusMasyvoSkaicius(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Number.isInteger(arr[i])) {
      sum = sum + arr[i]
    }
  }
  console.log(sum)
} */

// sudetiVisusMasyvoSkaicius(sudetiVisusSkaicius)

// uzduotis parasyti funckija kuri startini ir galini skaiciu
// musu atveju naudosime skaicius nuo 0 iki 100
// susikurti masyva su skaiciais nuo 0 iki 100 nerasant viso masyvo ranka
// ties kiekvienu skaiciu, kuris dalinasi is 3 be liekanos
// parasys 'Triju kartotinis
// tas pats su kiekvienu kuris dalinasi is 5
// "Penkiu kartotinis"
// jei skaicius dalinasi is 3 ir is 5 be liekanos 
// 'Koks tai skaicius - triju ir penkiu kartotinis"
// galiausiai i konsole isvesti tris masyvus kuriuose bus
// triju, penkiu bei triju ir penkiu kartotiniai
/* function kartotiniai(startinisSkaicius, galinisSkaicius){
  // const skaiciai = Array.from(Array(100).keys());
  const skaiciai = [];  
  const trijuKartotiniai = [];
  const penkiuKartotiniai = [];
  const trijuIrPenkiuKartotiniai = [];
  for (let i = startinisSkaicius; i <= galinisSkaicius; i++){
    skaiciai.push(i)
  }

  if (15 % 5 == 0) {
    console.log('hi')
  } */

  /* for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 3 === 0 && skaiciai[i] % 5 === 0) {
      trijuIrPenkiuKartotiniai.push(skaiciai[i])
      // trijuKartotiniai.push(skaiciai[i]);
      // penkiuKartotiniai.push(skaiciai[i]);
    } else if (skaiciai[i] % 3 === 0) {
      trijuKartotiniai.push(skaiciai[i]);
    } else if (skaiciai[i] % 5 === 0) {
      penkiuKartotiniai.push(skaiciai[i]);
    } 
  }
  console.log('triju', trijuKartotiniai)
  console.log('penkiu', penkiuKartotiniai)
  console.log('bendri', trijuIrPenkiuKartotiniai)
}
kartotiniai(0, 100)
 */
// uzduotis parasyti funkcija, kuri priima Stringa
// ir grazina ta pati stinga su prima ir paskutine raide didziosiomis 
// gali buti vienas zodis gali buti keli
// pradziai padarykite kad tik stingo pirma ir paskutine raide padidina
// Bonus uzduotis papildyti funkcija, kad pakeistu visu zodziu stinge pirmas ir paskutines raides
/* function capitalize(str) {
  const arrayFromString = str.split(' ');
  const newArr = []
  for (let i = 0; i < arrayFromString.length; i++) {
    let ilgisMinusVienas = arrayFromString[i].length - 1;
    if(arrayFromString[i].length === 1) {
      newArr.push(arrayFromString[i][0].toUpperCase());
    } else {
      let capitalizedString = arrayFromString[i][0].toUpperCase() +
      arrayFromString[i].slice(1, arrayFromString[i].length -2) + 
      arrayFromString[i][ilgisMinusVienas].toUpperCase()
     newArr.push(capitalizedString)
    }
  }
} */

// capitalize('hkweki mwewqwy name iqweqws weqpw i o')

// Uzduotis parasyti funkcija kuri surusiuos skaicius esancius masyve nuo didziausio iki maziausio
/* const randomNumbers = [1, 22, 543, 2, 6, 12, 55, 86, 6, 9, 12, 31, 51, 92, 3]
// isvesti nauja masyva i console
function rusiuotiSkaiciusNuoDidziausio(randomNumbers) {
  function compare(a, b) {
      if (a > b) {
          return -1;
function rastiDidziausiaSkaiciu(randomNumbers) {
  return randomNumbers.sort(compare)
}
 */
// Parasyti funkcija kuri suras vidurini zenkla Stringe ir isves ji i console
// jei stringe yra nelyginis sibloliu skaicius, isvedame vidurini simboli
// jei lyginis, du vidurinius

/* function grazinkViduriniSimboli(str){
 if (str.length % 2 === 0) { // lengt = 8
  // lyginis - 1 = nelyginis 
  // pirmas sprendimo budas
   let index = Math.floor((str.length - 1) / 2); // susirasti pirmo vidurinio stringo indexa
   console.log(str.slice(index, index + 2)) // pridedu 2 nes slice, neitraukia end indexo, todel + 1 netinka
    // gaunasi kad cia yra slice(1, 1 + 2)
    // antras sprendimo budas
   console.log(str.slice(str.length/2-1, str.length/2+1)); 
} else {
  ///         [ T e s s i ] .length() - grazins 5
  ///         [ 0 1 2 3 4 ]
  let index = (str.length - 1) / 2;
  console.log(index); 
  console.log(str[index]) // str[2]
  }
} */

/* //kitas sprendimo budas
grazinkViduriniSimboli('Tessi')

function getMidSymbol(text){

  let midIndex = parseInt(text.length / 2);
  console.log(midIndex);

  if(text.length % 2 === 0){
      return `${text[midIndex -1]}${text[midIndex]}`;
  }
  
  return text[midIndex];
}

console.log(getMidSymbol("asdasdasdasd"))
 */
// uzduotis suskikurti objekta kvadrato
// sukurti du metodus (plotas ir perimetras) kurie priims krastines ilgi
// kvadrato.plotas(10)  - grazins 100
// kvadrato.perimetras(10) - 40

//THIS

/* const oldSyntax = {
  boom: 14,
  vardas: 'Jonas',
  pridekDvylika: function(item) {
    console.log(item + this.boom)
  },
  kitas: function(){
    console.log('labas')
  }
}
oldSyntax.pridekDvylika(12) // situo atveju this ieskau
// oldSyntax viduje
let newAdd12 = oldSyntax.pridekDvylika;
// yra tas pats kas 
// let newAdd12 = function(item) {
  //   console.log(item + this.boom)
  // },

newAdd12(8) */
// This priklauso nuo to kaip buvo iskviesta funkcija 
// oldSyntax.pridekDvylika(8) // this priklausys nuo to kas kviecia funkcija
// siuo atveju funkcija kviecia odlSyntax -> todel this refferins i oldSyntax vidu

/* const knygosApieProgramavima = [
  {
    title: "The Pragmatic Programmer",
    author: 'David Thomas',
    goodReadsRating: 4.33,
    numberOfRatings: 18579
  },
  {
    title: "Clean Code",
    author: 'Robert C. Martin',
    goodReadsRating: 4.39,
    numberOfRatings: 18094
  },
  {
    title: "The Clean Coder",
    author: 'Robert C. Martin',
    goodReadsRating: 4.28,
    numberOfRatings: 7459
  },
  {
    title: "The Effective Engineer",
    author: 'Edmond Lau',
    goodReadsRating: 4.28,
    numberOfRatings: 1401
  },
  {
    title: "Eloquent JavaScript",
    author: 'Marijn Haverbeke',
    goodReadsRating: 4.15,
    numberOfRatings: 2680
  }
]
white_check_mark
eyes
raised_hands
function grazintiPavadinima(knyga) {
  return knyga.title
} */
// primas ratas 
// grazintiPavadinima(
//   {
//     title: "The Pragmatic Programmer",
//     author: 'David Thomas',
//     goodReadsRating: 4.33,
//     numberOfRatings: 18579
//   }
// )
// funkcija grazina item.title --> "The Pragmatic Programmer"
// ["The Pragmatic Programmer" ]

/* // antras ratas ["The Pragmatic Programmer", "Clean Code"]
 const knygupavadinimai = knygosApieProgramavima.map(grazintiPavadinima)
 // pirmo callo metu grazintiPavadinima[knygosApieProgramavima[0]]
console.log(knygupavadinimai)
// console.log(knygosApieProgramavima[1].author)
 */

let myImg = document.querySelector('img');
let myH1 = document.querySelector('h1')
let container = document.getElementById('container')
container.style.width = '300px'
container.style.height = '300px'
container.style.border = '2px solid gray'
myImg.style.borderRadius = '50%';
myImg.style.width = '70%';
myImg.style.margin = '0 auto'
myH1.style.textAlign = 'center'























