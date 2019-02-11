'use strict';
// Deuxième balise div
console.log(document.getElementsByTagName('div')[1]);
console.log(document.querySelectorAll('div')[1]);

// Première classe secondary-paragraph
console.log(document.getElementsByClassName('secondary-paragraph')[1]);
console.log(document.querySelectorAll('.secondary-paragraph')[1]);

// Element unique
console.log(document.getElementById('js-unique-el'));
console.log(document.querySelector('#js-unique-el'));

// Tous les p dans un div
console.log(document.querySelectorAll('div p'));

// Tous les span juste après un div
console.log(document.querySelectorAll('div + span'));
