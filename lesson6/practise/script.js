$('#navbarDropdownMenuLink').click(function (event)  {
    $('#navbarDropdownMenu').toggle(); 

})

// BONUS : HIDE WHEN CLICKING
$('#navbarDropdownMenu').click(function (event) {
    $('#navbarDropdownMenu').hide();
})
//

$('footer #js-current-year').text(new Date().getFullYear());


$('#js-bmi-form').submit(function (event ) {
    event.preventDefault();
    console.log('Submit');
    let weight = parseFloat($('#js-bmi-weight').val());
    // console.log(weight);
    let height = parseFloat($('#js-bmi-height').val());
    // console.log(height);
    // poids / ((hauteur / 100) * (hauteur / 100)).
    let bmi = weight / ( (height / 100 ) * (height / 100) );
    if(isNaN(bmi)) { // Si le calcul fait 0 car valeur vide entrée :
        $('#result').addClass('alert-warning'); // On ajoute une class warning
        $('#result').text('Please enter your informations !'); // Le texte qui sera affiché
        $('#result').show(); // On affiche le div (il est en display : none de base)
    } else { // Sinon si le calcul est bon, la même chose mais en affichant le BMI 

        if($('#result').hasClass('alert-warning')) { // Si on a deja eu un warning
            $('#result').removeClass('alert-warning'); // On remove la class
        }
        $('#result').addClass('alert-primary');
        let indice = '';
        if(bmi < 18.5) { indice += ' considered underweight'}
        else if(bmi >= 18.5 && bmi <= 25) { indice += ' a healthy weight'}
        else if(bmi > 25) { indice += ' considered overweight'}
        $('#result').show();
        $('#result').text('Your BMI is :' + bmi.toFixed(1) + indice);
        console.log('Votre BMI', bmi.toFixed(1), indice);
    }

})


const bmiFacts = [
    {
      title: 'Future weight of children can be anticipated by BMI',
      description: 'Scientists in a new study have concluded that future weight can be forecasted by looking at children’s BMI. ',
      img: 'http://lorempixel.com/200/200/cats'
    },
    {
      title: 'Losing BMI weight lowers the risk of diabetes',
      description: 'New research established the fact that lowering BMI by almost five units dramatically lowers risk of diabetes, in spite of the initial weight of a person.',
      img: 'http://lorempixel.com/200/200/sports'
    },
    {
      title: 'Pre-pregnancy BMI is closely related to excess weight gain during pregnancy',
      description: 'Excessive weight gain during pregnancy affects the health of a mother and her baby, pre-pregnancy BMI and ethnicity might signal a likelihood for obesity later in life for young mothers.',
      img: 'http://lorempixel.com/200/200/fashion'
    },
    {
      title: 'Coronary heart disease is proportionate to Body Mass Index (BMI)',
      description: 'According to a research from the Million Women Study, Coronary heart disease (CHD) increases with age and also with an increase in body mass index (BMI).',
      img: 'http://lorempixel.com/200/200/food'
    },
  ];


  $.each(bmiFacts, function(index, val) { // Pour chaque elements du tableau bmiFacts on stocke son index et ses valeurs
    $('#js-facts').append(`
                          <div class="col col-12 col-sm-6 col-lg-3 mb-3">
                            <div class="card h-100">
                              <img src="${val.img}" class="card-img-top">
                              <div class="card-body">
                                <h5 class="card-title">${ (index + 1) + ' - ' + val.title}</h5>
                                <p class="card-text">${val.description}</p>
                              </div>
                            </div>
                          </div>
                          `);
  })
// Ci dessus on a append dans le div js-facts nos cards avec les valeurs de nos articles de bmiFacts


let isClicked; // On initialise la variable pour savoir si la pub est clicked
$('#js-ad-close').click( function () { // Ajout de l'ecouteur d'evenement click sur le div de la croix
    let url = $('#js-ad a').attr('href'); // On récupère l'url de la pub dans l'item <a> </a> du div js-ad
    if( isNaN(isClicked)) { // Si isClicked est non defini :
        window.open(url, '_blank'); // On ouvre l'url de la pub dans un autre onglet
        isClicked = 1; // isClicked passe à 1, on a bien cliqué sur la pub
    } else if (isClicked == 1) { // Si on reclique sur la croix après avoir cliqué sur la pub une première fois
        $('#js-ad').hide(); // Alors on cache la pub
    }
})
