// Créez un objet avec les valeurs suivantes: id = 1, name = Jeremy, email = jeremy@ynov.com.

const user = {
    id: 1,
    name: 'Jeremy',
    email: 'email@email.com',
    car: {
        color: 'red',
    },
    test: [1, 2, 3]
};

// Loggez l'id de cet objet avec un point.
console.log(user.id);
// console.log(user.car.color);

// Loggez l'id de cet objet avec les crochets.
console.log(user['id']);
// console.log(user['car'].color);

// Déclarez une variable avec la valeur 'name'. Accédez à la propriété 'name' de votre objet par cette variable et les crochets [].
const prop = 'name';
console.log(user[prop]);

// Changez la valeur d'id dans votre objet à 2.
user.id = 2;
console.log(user.id);
// Ajoutez à votre objet une nouvelle propriété 'human' de valeur true.


// Changez la valeur de la propriété 'email' à undefined.



const cart = [
    { item: 'a', price: 2, quantity: 1 },
    { item: 'b', price: 3, quantity: 1 },
    { item: 'c', price: 4, quantity: 1 }
];

const res = cart.reduce((acc, curVal) => {
    console.log('acc', acc);
    console.log('curVal', curVal);
    return acc += curVal.price * curVal.quantity;

}, 0); // Parcours toute les valeurs du tableau, ajoute à "acc" les prix * la quantité du panier d'achat.

console.log('res', res)

