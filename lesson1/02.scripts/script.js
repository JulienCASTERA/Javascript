'use strict';

let user;
let admin;
user = "Sophie";
admin = user;
console.log(admin);
user = "Mathieu";
console.log(user);
console.log(admin);
//seule la variable modifiée est modifiée (ici user). admin ne change pas.

let distance = "12 km";
distance = 12;
//aucune erreur
let username = "Claire";
const userRole = 1;
username = "Emmanuel";
console.log(username);
userRole = 2;
console.log(userRole);
//index.js:21 Uncaught TypeError: Assignment to constant variable.
//car on essaie de redéfinir une constante (c'est interdit)

//Age d'un utilisateur
let userAge = 18;
//Valeur de Pi
const pi = 3.14;
//Liste de liens dans la barre de navigation
let navLinks = [];
//Masse terrestre
const landMass = 10000;
//Année 2019
let currentYear = 2019;
//Plugin de choix de date
let dateChoice;
//Numéro de téléphone de la police
const policePhone = 17;
//Le poids qu'un utilisateur a rentré dans un champ de formulaire
let userWeight;