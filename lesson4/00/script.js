'use strict';

// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.
setTimeout(() => {
  console.log("Hello");
}, 3000);

// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.
setTimeout(() => {
  console.log("Logged after 5 seconds")
}, 5000);


// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.
window.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Clicked");
  }, 3000);
});


// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.

document.getElementById("survol").addEventListener("mouseover", () => {
  setTimeout(() => {
  console.log("I was hovered 5.5 seconds ago")
  }, 5500);
})

// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'.


// Autre facon de le faire
//  window.addEventListener('load', function() {
//   var image = document.images[0];
//   var downloadingImage = new Image();
//   downloadingImage.onload = function(){
//       image.src = this.src;   
//   };
//   downloadingImage.src = "http://lorempixel.com/400/200/";
//   console.log("Done !");
// })

var image = document.createElement('img');
image.src = "http://lorempixel.com/400/200/";
image.onload = () => {
  document.getElementById("survol").appendChild(image);
  console.log("Done !");
};
image.onerror = () => {
  console.log("Error");
};


// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.
// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.


var s = document.createElement('script');
s.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js";
document.body.appendChild(s);
s.onload = () => {
  var a = _.round(10.329189, 3);
  console.log(a);
};

