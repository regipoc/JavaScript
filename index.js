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


let vardas = 2;
let vardas = 2;
let vardas = 2;

let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(text1, text2);

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




