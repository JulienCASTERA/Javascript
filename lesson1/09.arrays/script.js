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


// Créez un tableau qui contient les éléments de différents types.
const multiTypeArr = [1, 'DuText', 'Oscours', 55];

// Créez un tableau multidimensionnel d'au moins 3 éléments. Loggez le premier élément du premier élément. Modifiez le second élément du dernier élément.

const multiDimArr = [['1er element du premier element','2eme element du 1er element','3eme element du 1er element'],
                    ['1er element du deuxieme element','2eme element du deuxieme element','3eme element du deuxieme element'],
                    ['1er element du troisieme element','2eme element du troisieme element','3eme element du troisieme element']];


//////////////////////////////////////////////////
// Ajouter/supprimer les éléments du tableau

const numberArr = [1, 2, 3, 4, 5, 6, 7];

// Supprimez le premier élément du tableau.
numberArr.pop(0);
// Supprimez le dernier élément du tableau.
numberArr.pop(numberArr.length - 1);
// Ajoutez un élément au début du tableau.
numberArr.unshift(0);
// Ajoutez un élément à la fin du tableau.
numberArr.push(1000);


////////////////////////////////////////////////

const firstArr = [1,2,3];
const secArr = [4,5,6];

// Fusionnez deux tableau dans un seul: [1, 2, 3] et [4, 5, 6] 
const thirdAddArr = [...firstArr, ...secArr];

// Fusionnez plusieurs tableaux dans un seul: [1, 2, 3] et [4, 5, 6] et [7, 8, 9, 10] et [11, 12, 13, 14]
const aled = [7, 8, 9, 10];
const oscours = [11, 12, 13, 14];

constFourthAddArr =  [...firstArr, ...secArr, ...aled, ...oscours];


/////////////////// Not da TIME sorry :(
// Les méthodes à utiliser: slice, splice

// Extrayez les éléments de la position 2 à 4 sans modifier le tableau original: [1, 2, 3, 4, 5, 6, 7]
// Extrayez le dernier élément du tableau sans modifier le tableau original: [1, 2, 3]
// Supprimez les deux premiers éléments du tableau original: [1, 2, 3, 4, 5]
// Insérez trois éléments dans un tableau à la position 2: [1, 2, 3, 4, 5]
// Remplacer l’élément en position 1 par un autre élément: [1, 2, 3, 4, 5] ​

