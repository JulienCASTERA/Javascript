'use strict';

// Créez un cookie lang égal à 'fr'.
document.cookie = 'lang=fr';

// Créez un cookie previewSeen égal à true qui va expirer le lendement.
document.cookie = 'previewSeen=true;expires='+new Date('2019-02-12');

// Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.
//document.cookie = 'test=test;expires='+new Date('2019-12-31');
docCookies.setItem('test', 'test', new Date('2019-12-31'));

// Créez un cookie userId égal à 123
docCookies.setItem('userId', 123);

// Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
console.log(docCookies.getItem('userId'), typeof docCookies.getItem('userId'));

// Modifiez la valeur du cookie userId à 321.
docCookies.setItem('userId', 321);

// Supprimez le cookie test.
docCookies.removeItem('test');

// Stocker un objet
const user = {
    id: 1,
    name: 'Thibaud'
  }
docCookies.setItem('user', JSON.stringify(user));
const myObj = docCookies.getItem('user');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));


const emails = ['a@ynov.com', 'b@ynov.com', 'c@ynov.com'];
docCookies.setItem('emails', JSON.stringify(emails));
const myObj2 = docCookies.getItem('emails');
console.log('myObj2', myObj2);
console.log('myObj2 parsed', JSON.parse(myObj2));

// LOCAL STORAGE

// Vérifiez si l'objet LocalStorage est supporté par le navigateur
if (localStorage) {
    localStorage.setItem('greeting', 'Hello World');
    localStorage.setItem('greeting', 'Welcome');
    console.log(localStorage.getItem('greeting'));
    localStorage.removeItem('greeting');

    localStorage.clear();
}