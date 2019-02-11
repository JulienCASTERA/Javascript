'use strict';

// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
const firstP = document.querySelector('.first-p');
firstP.innerText = 'I am the first paragraph';

// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
const secP = document.querySelectorAll('p')[1];
secP.innerHTML = '<span>Hello</span>';

// Modifiez les attributs width à 50% et height à 'auto' de l'image.
const img = document.querySelector('img');
img.setAttribute('width', '50%');
img.setAttribute('height', 'auto');

// Ajoutez un attribut alt non vide à l'image.
img.setAttribute('alt', 'image');

// Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
const fpd = document.querySelector('div p');
fpd.style.color = 'blue';
fpd.style['font-size'] = '1.5em';

// Ajoutez la classe img à l'image.
img.classList.add('img');
