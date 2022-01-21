var vel = 80
console.log(`A velocidade do seu carro é ${vel} km/h`)

//Condição composta com if and else

if (vel > 60){
    console.log('Você ultrapassou a velocidade permitida. MULTADO!')
    console.log('Cuidado, dirija com segurança!')
} else if (vel <= 20){
    console.log('Você está abaixo da velocidade da via, siga na faixa mais à direita!')
}
console.log('Dirija sempre usando o cinto de segurança!')