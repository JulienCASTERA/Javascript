'use strict';

// Affichez l'alerte si le bouton #js-show-alert est cliqué. 
// Cachez-la si le bouton #js-hide-alert est cliqué.

$('#js-show-alert').click(() => {

    // $('#js-alert').show(); //aficher
    $('#js-alert').toggle() // basculer la visiblité
});

$('#js-hide-alert').click(() => {

    $('#js-alert').hide(); // cacher
});


// Utilisez les méthodes slideUp, slideDown ou slideToggle
// pour afficher/cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.

$('#js-slide-example-address').click(() => {
    // $('#js-slide-example-links').slideDown();
    // $('#js-slide-example-links').slideToggle(); // slideUp + slideDown
    $('#js-slide-example-links').fadeToggle(); // fadeIn + fadeOut
});



// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). 
// Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).

$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
})
$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
})

// Après le rendu de la page tous les <div> ont l'opacité de 30%. Quand un <div> est cliqué, son opacité monte à 100%. 
// Quand un autre <div> est cliqué, son opacité monte à 100% et l'opacité de tous les autres divs descend de nouveau à 30%.
// Utilisez la méthode fadeTo.

// $('#js-div-1, #js-div-2, #js-div-3, #js-div-4').click(() => {
//     $(this).fadeTo("slow", 1);
// })


// Appliquez une animation au div #js-animation-1: 
// ce <div> se deplace à 300px de gauche à droit en 700 millisecondes 3 secondes après la fin du rendu de la page.
//  Utilisez les méthodes delay et animate.

$('#js-animation-1')
    .delay(3000)
    .animate({
        position: 'relative',
        left: '300px',
        width: '200px'
    }, 700)
    .animate({
        height: '400px',
    })