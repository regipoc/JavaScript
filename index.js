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

const myArr = ["One", "Two", "Sofa", "Stalas", "test"]