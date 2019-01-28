// I need to convert Fahrenheit to Celsius five times with different values:
const res1 = (5 / 9) * (18 - 32);
const res2 = (5 / 9) * (12 - 32);
const res3 = (5 / 9) * (33 - 32);
const res4 = (5 / 9) * (14 - 32);
const res5 = (5 / 9) * (17 - 32);

// Oh boy, this is repetitive. How can I spend less time on code writing and its maintaining?
// FUNCTIONS is the answer!

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

const loveIt1 = toCelsius(18);
const loveIt2 = toCelsius(12);
const loveIt3 = toCelsius(33);
const loveIt4 = toCelsius(14);
const loveIt5 = toCelsius(17);
// Love it!

function myFunc(text) {
    console.log(text);
    return
}
console.log('myFunc', myFunc());

const myFunc2 = (text) => {
    return 'Hello World';
}
console.log('myFunc2', myFunc2());

const sum = (p1, p2 = 0) => {
    return p1 + p2;
}

console.log(sum(4, 10));

const tronquer = (text, nb, trail = '...') => {
    if (text.length > length) {
        return text.substring(0, nb) + trail;
    } else {
        return text;
    }
}

console.log(tronquer('Je suis un enfant', 6));