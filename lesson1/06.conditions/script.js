// if (condition) {
//     console.log('1');
// } else if (condition2) {
//     console.log('2')
// } else {
//     console.log('default condition')
// }

// Ecrivez en ligne de code un moyen de vérifier si 5 est supérieur à 0 ET inférieur à 10 dans la même expression if.
if (5 > 0 || 5 > 10) {
    console.log('1');
} else {
    console.log('2');
}

// Ecrivez en ligne de code un moyen de vérifier si 20 divisé par 2 est supérieur ou égal à 10 OU inférieur à 15 dans la même expression. Si vrai, loggez 'Yes', sinon loggez 'No'.
let a = 20 / 2
if (a > 10 || a < 15) {
    console.log('Yes');
} else {
    console.log('No');
}


// Un groupe peut être publique ou privé. Un utilisateur peut accéder au contenu d’un groupe si ce groupe est publique ou si le groupe est privé mais qu’il est membre ce groupe. ​ Utilisez deux variables isPrivate et isMember pour écrire une seule condition qui vérifie si utilisateur peut accéder au contenu d’un groupe ​

// Testez votre solution avec les valeurs suivantes:

// // can see the group
let isPrivate = false;
let isMember = false;

// // can't see the group
// let isPrivate = true;
// let isMember = false;

// // can see the group
// let isPrivate = true;
// let isMember = true;

if (isPrivate === false || (isPrivate && isMember)) {
    console.log('Can see the group');
} else {
    console.log(`Can't see the group`);
}

const today = 'Lundi';

if (today === 'Lundi') {

} else if (today === 'Mardi') {

} else if (today === 'Mercredi') {

} else if (today === 'Jeudi') {

}

switch (today) {
    case 'Lundi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'Mardi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'Mercredi':
        console.log(`Aujourd'hui on est ${today}`);
        break;
    case 'Jeudi':
    case 'Vendredi':
        console.log(`Aujourd'hui on est jeudi ou vendredi`);
        break;
    default:
        console.log(`Aujourd'hui on est samedi ou dimanche`);
}

let username = prompt('What is your name ?');
console.log('username', username);

// Demandez à l’utilisateur de se présenter avec la méthode prompt. 
// Si le prénom est saisi, alert 'Nice to meet you $username ($username est le prénon saisi)!', sinon alert 'Don't be shy!'

if(username) {
    alert(`Nice to meet you ${username}`);
} else {
    alert(`Don't be shy !`);
}

// condtion ? statement 1 : statement 2

username !== null ?
    alert(`Nice to meet you ${username}`) :
    alert(`Don't be shy !`);