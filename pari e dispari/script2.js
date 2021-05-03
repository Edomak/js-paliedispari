// Pari e Dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri.

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

// Dichiariamo chi ha vinto.

// alert("Devi scegliere o pari o dispari!");

do {
    var sceltaUtente = prompt("Scegli pari o dispari");

} while (sceltaUtente != "pari" && sceltaUtente != "dispari"); 
console.log(sceltaUtente);

do {
    var numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

} while (numeroUtente <= 0 || numeroUtente > 5); 
console.log(numeroUtente);

var numeroComputer = getRandomNumber(1, 5);
console.log(numeroComputer);

var somma = numeroUtente + numeroComputer;
console.log("La somma dei numeri è: ", somma);


if (isEven(somma) == sceltaUtente) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

// Function

function isEven (num) {
    if (num % 2 == 0) {
        console.log("Il risultato è pari!");
        return "pari";
    } else {
        console.log("Il risultato è dispari!");
        return "dispari";
    }
}

function getRandomNumber (min, max) {
    var numeroComputer = Math.floor(Math.random() * (max - min + 1) ) + min;
    return numeroComputer;
}

