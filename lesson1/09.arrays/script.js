// Créez un tableau qui contient 3 de vos sites web préférés.
const myArray = ['Messenger','Google','Youtube'];

// Loggez le premier élément de ce tableau.
console.log(myArray[0]);

// Loggez le second élément de ce tableau.
console.log(myArray[1]);

// Loggez le nombre d'éléments de ce tableau.
console.log(myArray.length);

// Loggez le dernier élément de ce tableau avec de l'aide de la propriété .length.
console.log(myArray[myArray.length - 1]);


//////////////////////////////////////////////////
//                  Itération                   //
// Les méthodes à utiliser: map, forEach, reduce //
// Divisez chaque élément du tableau [0, 1, 2, 3, 4, 5] par 2 sans modifier le tableau original.
// const arr = [0, 1, 2, 3, 4, 5];

// arr.map(x => {
//     console.log('x', x);
//     return x / 2;
// });

// let res = [];
// arr.forEach(num => {
//     console.log('num', num);
//     res.push(num / 2);
// });

// console.log('res', res);

//////////////////////////////////////////////////

// const myArr = [1, 2, 3];
// const myArr2 = myArr;
// myArr2[0] = 0;
// console.log(myArr) // [0, 2, 3] - What the heck? Why? How?
// console.log(myArr2) // [0, 2, 3]

const myArr = [1, 2, 3];
const myArr2 = [...myArr]; // Le tableau myArr est recopié sans garder la référence