// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const red = document.querySelector(".red")
const green = document.querySelector(".green")

// red.style.color = "red"
// green.style.color = "green"

const numbers = []
for( let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random() * 100) +1)
}

console.log(numbers)

const oddNumbers = []
for (let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) {
        oddNumbers.push(numbers[i]);
    }
}

const evenNumbers = []
for (let i = 0; i < numbers.length; i++) {
    if(i % 2 === 1) {
        evenNumbers.push(numbers[i]);
    }
}

document.getElementById("red").innerHTML = oddNumbers
document.getElementById("green").innerHTML = evenNumbers

console.log(oddNumbers)
console.log(evenNumbers)
