var agora = new Date()
var hora = agora
console.log(`Em Brasília ${hora}`)
if(hora < 12){
    console.log('Bom dia!')
} else if (hora <=18) {
    console.log('Boa tarde!!!')
} else if (hora >= 0 && hora <= 5) {
    console.log('Boa Madrugada!!!')
} else {
    console.log('Boa noite!!!')
}