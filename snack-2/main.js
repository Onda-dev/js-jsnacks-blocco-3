// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Fai inserire un numero, che chiameremo N, all’utente.
const N = Number(prompt("Inserisci un numero"))
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.
const dadArray = []
const sonArray = []

for( let i = 0; i < 10; i++) {
    sonArray.push(Math.floor(Math.random() * 100) +1)
}

for(let i = 0; i < N; i++) {
    dadArray.push(sonArray)[i];
}

console.log(dadArray)