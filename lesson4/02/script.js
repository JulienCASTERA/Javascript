'use strict';

// Exeptionally comments are in French this time

// La méthode de BOM - XMLHttpRequest - est instanciée
// var xhttp = new XMLHttpRequest();
// // onreadystatechange est appelé de manière asynchrone et sera déclenché à chaque changement du statut de l'objet "XMLHttpRequest" (comme un écouteur d'événement)
// xhttp.onreadystatechange = () => {
//     /*
//     Si l'état de "XMLHttpRequest" est égal à 4 (4 signifie "DONE"). Voir tous les statuts: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

//     Et si le statut la requête est égal à 200 (Ok / réussite)
//     */
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       // procédez à un traitement de la réponse 
//       console.log(xhttp)
//       console.log(xhttp.responseText)

//       const rawValue = xhttp.responseText
//       const parsedValue = JSON.parse(rawValue)


//       const hanSoloData = `
//         <p>Nom : ${parsedValue.name} </p>
//         <p>Sexe : ${parsedValue.gender} </p>
//         <p>Date de naissance: ${parsedValue.birth_year} </p>
//         `

//       document.querySelector('#js-han-solo').innerHTML = hanSoloData
//     }
// };
// // La méthode "open" crée la requête
// xhttp.open('GET', 'https://swapi.co/api/people/14', true);
// // Quand le traitement de la requête est terminé, la méthode "send" envoie la requête
// xhttp.send();


// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = () => {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//     console.log(xhttp.responseText)
//     const rawValue = xhttp.responseText
//     const parsedValue = JSON.parse(rawValue)

//     parsedValue.results.forEach(person => {
//       const myDiv = document.createElement('div')
//       const personData = `
//         <p>Nom : ${person.name} </p>
//         <p>Sexe : ${person.gender} </p>
//         <p>Date de naissance: ${person.birth_year} </p>
//         `
//         myDiv.innerHTML = personData
//         document.body.appendChild(myDiv)
//     });
    
//   }
// };
// xhttp.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
// xhttp.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];

planets.forEach(planet => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      const rawValue = xhttp.responseText
      const parsedValue = JSON.parse(rawValue)

      const myDiv = document.createElement('div')
      const planetData = `
        <p>Nom : ${parsedValue.name} </p>
        <p>Diametre : ${parsedValue.diameter} </p>
        <p>Climat: ${parsedValue.climat} </p>
        <p>Population: ${parsedValue.population} </p>
        `
        myDiv.innerHTML = planetData
        document.body.appendChild(myDiv)

    }
  };
  xhttp.open('GET', 'https://swapi.co/api/planets/' + planet + '/', true);
  xhttp.send();

})