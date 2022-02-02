
// Primeira forma de repetição
/*
console.log("While testing")
console.log("While testing")
console.log("While testing")
console.log("While testing")
console.log("While testing")
console.log("While testing")
console.log("While testing")
console.log("While testing")
*/


// Repetição com teste lógico no inicio
var c = 1
while (c < 6) {
    console.log(`Passo ${c}`)
    c++
}

// Repetição com teste lógico no final
var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c < 6)