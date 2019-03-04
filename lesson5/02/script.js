'use strict';

// Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.
// Récupérez et logguez dans la console le contenu du titre de la page.


const h1text = $('h1').text();
console.log('h1text', h1text);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My page Title')

// Récupérez et logguez dans la console le HTML de l'article.
const articlehtml = $('#js-article').html();
console.log('Logg html article', articlehtml);

// Changez le contenu de l'article à

// <h2>This is my article.</h2>
// <p>This is my article's content.</p>
// <a href="https://example.com">Read more</a>

$('#js-article').html(
    `
    <h2>This is my article.</h2>
    <p>This is my article's content.</p>
    <a href="https://example.com">Read more</a>
    `
);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.

const inputValue = $('#js-search').val();
console.log('Input value', inputValue);

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.
const placeholderValue = $('#js-search').attr("placeholder");
console.log('Et hup', placeholderValue);

// Changez la valeur du placeholder du champ de saisie à 'Search'
$('#js-search').attr("placeholder", "Search");


// Travail pratique : SEARCH

$('#js-search-form')[0].addEventListener("submit", function (event) {
    event.preventDefault();
    const val = $("#js-search-form #js-search").val();
    console.log(val);
    if (val == 'Chat') {
        $('#js-search-result').html('Miaou !');
    } else {
        $('#js-search-result').html('<p>Pas de resultats pour la recherche : <strong>' + val + '</strong></p>')
    }
});




// Insérer/supprimer du contenu
// Utilisez les méthodes append, prepend, before, after, remove, empty pour travailler avec le HTML suivant.
// Ajoutez une balise <h1> avec la valeur 'Cats are the weirdest' dans l'article avec l'id js-article-1.

$('#js-article-1').append('<h1>Cats are the weirdest</h1>');

// Ajoutez une balise <div> dans l'article avec l'id js-article-1.
$('#js-article-1').append('<div> </div>');

// Dans la balise <div> de l'article #js-article-1 ajoutez un paragraphe avec la valeur 'He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.'
$('#js-article-1 div').append('<p> He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest. </p>');

// Dans la balise <div> de l'article #js-article-1 ajoutez un autre paragraphe avec la valeur 'I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.
$('#js-article-1 div').prepend('<p> I recently found out that my cat, Marv, hates it when I read aloud. </p>');

// Après le premier paragraphe (entre les deux paragraphes) de l'article js-article-1 ajoutez une image.
$('#js-article-1 p:first').after('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vladimir_Putin_%282017-07-08%29_%28cropped%29.jpg/220px-Vladimir_Putin_%282017-07-08%29_%28cropped%29.jpg">');

// Avant l'article #js-article-1 ajoutez un autre article:
$('#js-article-1').before(`
    <article id="js-article-3">
    <h1>Cats are the weirdest-3</h1>
    <p>My cat brought me two large potatoes in the middle of the night from the kitchen counter.</p>
    </article>
    `
);

// Supprimez le contenu de l'article #js-article-2.
$('#js-article-2').empty();


// Supprimez du DOM l'article #js-article-2.
$('#js-article-2').remove();
//Dans le <div> avec l'id js-cat-problems insérez dynamiquement :

//[append] Une image avec src égal à https://img.buzzfeed.com/buzzfeed-static/static/2014-12/23/9/enhanced/webdr12/anigif_enhanced-23685-1419343761-9.gif?downsize=800:*&output-format=auto&output-quality=auto
const cimg = document.createElement('img');
cimg.src = 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/23/9/enhanced/webdr12/anigif_enhanced-23685-1419343761-9.gif?downsize=800:*&output-format=auto&output-quality=auto';
$('#js-cat-problems').append(cimg);
//[prepend] Un paragraphe avec le texte Votre chat a de l'humour. Par exemple, il adore se mettre à chasser une souris invisible, faire des dérapages contrôlés ou gratter sous votre lit à 5h11 du matin. en tant que premier enfant du div.
const cp = document.createElement('p');
cp.innerText = `Votre chat a de l'humour. Par exemple, il adore se mettre à chasser une souris invisible, faire des dérapages contrôlés ou gratter sous votre lit à 5h11 du matin.`;
$('#js-cat-problems').append(cp);
//[append] Un paragraphe avec le texte Et ne vous avisez pas de trop remuer les pieds : vous pourriez le regretter. en tant que dernier enfant du div.
const cp2 = document.createElement('p');
cp2.innerText = `Et ne vous avisez pas de trop remuer les pieds : vous pourriez le regretter.`;
$('#js-cat-problems').append(cp2);
//[before] Un paragraphe avec le texte C'est la raison pour laquelle il peut aussi remplir la fonction « réveil », ce qui est bien pratique. Enfin, sauf les week-ends. juste avant l'image.
const cp3 = document.createElement('p');
cp3.innerText = `C'est la raison pour laquelle il peut aussi remplir la fonction « réveil », ce qui est bien pratique. Enfin, sauf les week-ends.`;
$('#js-cat-problems img').before(cp3);
//[after] Un paragraphe avec le texte S'il dort dans votre lit, il y a de grandes chances pour qu'il s'installe pile au centre et que vous vous retrouviez au bord, prêt(e) à tomber. juste après l'image.
const cp4 = document.createElement('p');
cp4.innerText = `S'il dort dans votre lit, il y a de grandes chances pour qu'il s'installe pile au centre et que vous vous retrouviez au bord, prêt(e) à tomber.`;
$('#js-cat-problems img').after(cp4);
//Le texte final sera : Votre chat a de l'humour. Par exemple, il adore se mettre à chasser une souris invisible, faire des dérapages contrôlés ou gratter sous votre lit à 5h11 du matin. C'est la raison pour laquelle il peut aussi remplir la fonction « réveil », ce qui est bien pratique. Enfin, sauf les week-ends. (image) S'il dort dans votre lit, il y a de grandes chances pour qu'il s'installe pile au centre et que vous vous retrouviez au bord, prêt(e) à tomber. Et ne vous avisez pas de trop remuer les pieds : vous pourriez le regretter.'


// Utilisez les méthodes addClass, removeClass, toggleClass, hasClass, css pour travailler avec le HTML suivant.


// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');


// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert-warning alert');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')) {
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.

$('#js-btn')[0].addEventListener("click", () => {
    $('#js-alert').toggleClass('alert-success');
})

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
});



// Vérifiez si le <div> a la classe alert-danger. 
// Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton.
//  Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.

if ($('#js-danger-alert').hasClass('alert-danger')) {
    console.log('Aled la class existe ');
    $('#js-danger-alert p').addClass('text-danger');
    $('#js-danger-alert :button').removeClass('btn-success');
}
$('#js-danger-alert :button')[0].addEventListener("click", () => {
    $('#js-danger-alert').css('display', 'none');
    console.log('Div deleted');
});