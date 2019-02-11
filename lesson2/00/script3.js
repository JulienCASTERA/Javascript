'use strict';

// Supprimez le paragraphe qui se trouve dans un div. Supprimez le span.

document.querySelector('div p').parentNode.removeChild(document.querySelector('div p'));
document.querySelector('span').parentNode.removeChild(document.querySelector('span'));

// Ajoutez un élément
const newEl = document.createElement('p');
newEl.innerText = "Blablabla";
document.querySelector('body').appendChild(newEl);
document.querySelector('body').prepend(newEl);
