//Skaičiai
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


let data = 1;
if (data>2) console.log (true);
if (data<2) console.log (false);

let ivestaSuma = prompt('Jusu moketina suma yra:')
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
console.log(galutinesuma)

let number = parseInt(prompt('enter the number'));
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
  console.log(i)
}
//uzduotis parasyti loop kuris prades grazinti skaicius nuo 0 iki 20 ir is skaiciu atims 4, paskutinis kaicius 0.
let skaicius = 1;
for (let i = 20; i >=0; i = i - 4){
console.log(i)
}

//uzduotis parasyti loop, kuris isspausdins i konsole visus lyginius skaicius nuo i iki 17
const Skaičiai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17]
for (let i = 0; i <= Skaičiai.length -1; i++) {
  if(Skaičiai [i] % 2 ===0 )
  console.log(Skaičiai [i])
}

//kaip isvesti visas reiksmes i konsole, pradedant nuo paskutines
const myArr = ["One", "Two", "Sofa", "Stalas", "test"]
for (let i = myArr.length-1; i >=0; i--) {
  console.log(myArr[i]);
}
// kaip pereiti per visa array ir isvesti i console skaicius kurie didesni uz 8.
const skaiciai = [0, 5, 29, 23, 4, 5, 2, 5, 24, 89, 6, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const daugiauneiAstuoni = [];
for (let i = 0; i <=skaiciai.length; i++) {
  if (skaiciai [i] >8){
    daugiauneiAstuoni.push(skaiciai [i])
  }
}
console.log (daugiauneiAstuoni)

// naudojantis for loop'u surasti didziausia skaiciu
const numberArr = [2, 45,3, 67, 34, 567, 34, 345, 123];
let didziausiasSkaicius = 0;
for (let i = 0; i <= numberArr.length -1; i++){
if (didziausiasSkaicius < numberArr[i]){
didziausiasSkaicius = numberArr[i];
}
}
// Nested loops
for (let isorinis = 1; isorinis <= 4; isorinis++){
  console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
  for(let vidinis = 1; vidinis < 5; vidinis++) {
    console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
  }
}

//uzduotis isivesti i console visas reiksmes nurodyti kokios eilutes reiksmes isvedama
const activities = [
  ["work, 9"],
  ["eat", 1],
  ["commute", 2],
  ["play game", 1],
  ["sleep", 7]
];
for (let i = 0; i < activities.length; i++) {
  console.log("Eitule ${i+1}")
  for (let j = 0; j < activities[i].length; j++){
    console.log(activities[i][j])
  }
  }

  /*
  const SLAPTAS_SKAICIUS = 52;
  let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
  while(spejimas !== SLAPTAS_SKAICIUS) { // false
    spejimas = parseFloat(prompt('Spekite skaiciu'));
  }
  */

  const skaiciai2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const skaic3 =[]

 
 for (let i of skaiciai2){ 
     console.log(i**2)
 }

 for (let i of skaiciai2){ 
    console.log(i**2)
    skaic3.push(i**2)
}

 //for (let i of skaiciai2) {
   // console.log(i)
 // }

 const todoList = [
    'Pradeti nuo q komandos', 
    'panaudoti prompt, kad gauti duomenis', 
    'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
    ];
    const todoList = [
      'Pradeti nuo q komandos', 
      'panaudoti prompt, kad gauti duomenis', 
      'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
      ];
    
    
    let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
    
    while(vartotojoIvestaKomanda !== 'quit') {
      if (vartotojoIvestaKomanda === 'list') {
        vartotojoIvestaKomanda = prompt('Iveskite nauja darba i darbu sarasa')
        todoList.push(vartotojoIvestaKomanda)
      } else if ()
      vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
    }  