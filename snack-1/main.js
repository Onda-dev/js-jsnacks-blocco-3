// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// Crea un array vuoto
const numbers = []
// chiedi e inserisci numeri nell'array finché la somma è minore di 50
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
while (sum < 50) {
    const number = Number(prompt("Inserisci un numero"))
    numbers.push(number)
}

console.log(sum)