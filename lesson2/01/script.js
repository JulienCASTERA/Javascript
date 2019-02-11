'use strict';
const allsections = document.querySelectorAll('section');

allsections[0].innerHTML += '<p>Nom de navigateur : ' + window.navigator.appCodeName + '</p>';
allsections[0].innerHTML += '<p>Langue principale : ' + window.navigator.language + '</p>';
allsections[0].innerHTML += '<p>Plateforme de mon ordinateur : ' + window.navigator.platform + '</p>';
allsections[0].innerHTML += '<p>Cookies activés : ' + window.navigator.cookieEnabled + '</p>';

allsections[1].innerHTML += '<p>Largeur écran : ' + window.screen.width + '</p>';
allsections[1].innerHTML += '<p>Hauteur écran : ' + window.screen.height + '</p>';
allsections[1].innerHTML += '<p>Orientation écran : ' + window.screen.orientation['type'] + '</p>';

allsections[2].innerHTML += '<p>Largeur de la fenêtre : ' + window.innerWidth + '</p>';
allsections[2].innerHTML += '<p>Hauteur de la fenêtre : ' + window.innerHeight + '</p>';
allsections[2].innerHTML += '<p>Largeur du navigateur : ' + window.outerWidth + '</p>';
allsections[2].innerHTML += '<p>Hauteur du navigateur : ' + window.outerHeight + '</p>';

allsections[3].innerHTML += '<p>URL complet : ' + window.location.href + '</p>';
allsections[3].innerHTML += '<p>Hôte : ' + window.location.hostname + '</p>';
allsections[3].innerHTML += '<p>Protocole : ' + window.location.protocol + '</p>';
