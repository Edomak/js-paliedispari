// Palindroma:

// Chiedere all'utente di inserire una parola.

// Creare una funzione per capire se la parola inserita è palindroma.

var parola = prompt("Inserisci una parola per controllare se è palindroma");
console.log(parola);

var parolaInversa = invertiParola(parola);
console.log(parolaInversa);

if (parola == parolaInversa) {
    console.log("La parola che hai inserito è palindroma!");
} else {
    console.log("La parola non è palindroma!");
}

// Function:

function invertiParola (stringa) {

    var parolaInversa = "";

    for (i = stringa.length - 1; i >= 0; i--) {
        parolaInversa += stringa[i];
    }

    return parolaInversa;
}