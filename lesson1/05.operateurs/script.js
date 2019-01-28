// 'use strict';
// console.log('Bonjour');

// let username = 'Jeremy';

let username;
username = 'Jeremy';
username = 'Toto';

const userStatus = 1;

let myString = 'Hello';
let myString2 = "Hello";
let myString3 = `
    Hello
`;

let myNumber = 1.5;

let myBoolean = true; //false

let myUndefined = undefined;

let myNull = null;

//NaN
console.log("Hello "+"World");
const str1 = 'Hello';
const str2 = 'World';
console.log(`${str1} ${str2}`);

let a = 10 + 32;
a += 8; //Incrémente a de 8; >> a = a + 8
console.log('a', a);

let b = 10 - 5;
b -= 8; //Décrémente b de 8; >> b = b - 8
console.log('b', b);

let c = 5 * 7;
c *= 2; //Multiplie c par 2; >> c = c * 2
console.log('c', c);

let d = 10 / 2;
d /= 2; //Divise d par 2; >> d = d / 2
console.log('d', d);

let e = 5;
console.log(e++); //Incrémentation automatique de c par 1
console.log(e);

console.log([1, 2, 3] * 3);

console.log(+'3');
console.log(+true);

console.log('4' + 3); //43
console.log(4 + 3 + '7'); //77
console.log('4' + 3 + 7); //437

//                     > >= < <= === !== 

//Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1.
console.log(2 > 1); // true
//Ecrivez en ligne de code un moyen de vérifier si 2 est inférieur à 1.
consle.log('2 < 1', 2 < 1); // false
//Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.
console.log('20 >+ 10', 20 >= 10) // true
//Ecrivez en ligne de code un moyen de vérifier si 10 est supérieur ou égal à 10.
console.log('10 >= 10', 10 >= 10); // true
//Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.
console.log(4 != '4'); // 4 != 4 false
console.log(4 !== '4'); // true

//Ecrivez en ligne de code un moyen de vérifier si '2' est égal à 2 avec l'opérateur d'égalité stricte.
console.log('2' !== 2); // true
//Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.
console.log('0' !== 0); // true
//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.
console.log('hello' === 'hello'); // true
//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.
console.log('hello' === 'Hello'); // false

