'use strict';



// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:
// toutes les balises <div>
$('div');
console.log('all divs', $('div'));

// toutes les balises avec le nom de classe js-paragraph

$('.js-paragraph');
console.log('Select class by name', $('.js-paragraph'));

// la balise avec l'id js-unique-paragraph
$('#js-unique-paragraph');
console.log('Select div by name', $('#js-unique-paragraph'));

// le premier titre <h3>
$('h3:first');
console.log('Le premier h3', $('h3:first'));

// le premier <th> du premier <tr>
$('tr:first th:first');
console.log('Le premier th', $('tr:first th:first'));

// le premier <td> du chaque <tr>
$('td:first-child');
console.log('Le premier TD de chaque TR', $('td:first-child'));

// tous les liens
$('a');
console.log('Tous les liens', $('a'));

// tous les lien externes (ceux qui ont l'attribut target égal à _blank)
$('a[target="_blank"');
console.log('Tous les liens externes', $('a[target="_blank"'));

// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
$('a[target="_blank"]');
console.log('Tous les liens internes', $('a[target!="_blank"]'));

// tous les boutons dans un formulaire
$(document).ready(() => {
$('form :button');
console.log('Tous les boutons dans un formulaire', $('form :button'));

});