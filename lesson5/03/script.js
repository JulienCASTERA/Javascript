'use strict';

// Evenements Jquery :

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. 
// Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.


let count = 0;
$('#js-bouton').click(function () {
    count++;
    if (count <= 5) {
        console.log("Clicked !");
    } else {
        console.log("L'écouteur d'évenement est enlevé");
        $('#js-bouton').off("click");
    }
});


// Créez un div bleu. 
// Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. 
// Utilisez les méthodes mouseenter, mouseleave ou hover.

$('#js-hovered').mouseenter((event) => {
    $('#js-hovered').css('background-color', 'green')
})

$('#js-hovered').mouseleave((event) => {
    $('#js-hovered').css('background-color', 'blue')
})

// Desactivez le comportement par defaut du click du bouton droit de la souris sur toute la page. 
// Si le bouton a été cliqué, vérifiez si le comportement par defaut est desactivé. 
// Dans ce cas-là, logguez dans la console 'You shall not pass'


// $('html')[0].oncontextmenu = function () { return false; }
// $('html').mousedown(function (click) {
//     if (click.button == 2) {
//         console.log('You shall not pass')
//         return false;
//     } else {
//         return true;
//     }
// });


// Ajoutez un écouteur d'événement 'click' à l'objet window. 
// Si cet événement est déclenché, ajoutez le HTML <p>Cette page a été cliquée <strong>une fois</strong></p> au body. 
// Ajoutez un autre écouteur d'événement 'dblclick'. 
// Si la page a été cliquée deux fois d'affilé, remplacez le HTML du body par <p>Cette page a été cliquée <strong>deux fois d'affilé</strong></p>.

$(window).click(function () {
    $('body').append('<p>Cette page a été cliquée <strong>une fois</strong></p>')
})
$(window).dblclick(function () {
    $('body').html("<p>Cette page a été cliquée <strong>deux fois d'affilé</strong></p>")
})


// Si le paragraphe avec l'id js-tooltip-wrapper est survolé, affichez le span avec l'id js-tooltip.
// Si il n'est plus survolé, cachez le span.

$('#js-tooltip-wrapper').hover( (event ) => {
    $('#js-tooltip').css('display','inline-block');
}, (event) => {
    console.log('Exit');
    $('#js-tooltip').css('display','none');
})





// Si le champ de saisie #js-input est mis en avant passez la couleur de sa bordure en bleu. 
// Si ce champ n'est plus mis en avant et reste vide, passez la couleur de sa bordure en rouge.

$('#js-input').focusin ((event ) => {
    $('#js-input').css('border-color','cyan');
})
$('#js-input').focusout ((event ) => {
    $('#js-input').css('border-color','red');
})


// Associez d'un coup les trois événements: 'keyup', 'keydown', 'keypress' - au champ de saisie. 
// Si l'un d'eux est déclenché, logguez dans la console le code de la touche appuyée.

$('#js-input').on('keyup keydown keypress', (event ) => {
    console.log(event.keyCode);
})

// Si le bouton radio 'Cat' a été choisi, logguez dans la console 'Go cats!' 
// Si le bouton radio 'Dog' a été choisi, logguez dans la console 'Go dogs!'



// A la soumission du formulaire, récupérez les valeurs de tous ces champs et logguez-les dans la console.