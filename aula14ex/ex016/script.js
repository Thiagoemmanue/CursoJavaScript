function contar() {
    var inicio = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    if (Number(inicio.value) <= 0) {
        window.alert('[Erro]: Campo "Inicio" não pode iniciar vazio ou com 0') 
    }  if (Number(fim.value) <= (Number(inicio.value))) {
        window.alert('[Erro]: Campo "Fim" dever ser maior que "Inicio"')
    }  if (Number(passo.value) < (Number(inicio.value)) || (Number(passo.value)) > (Number(fim.value))){
        window.alert('[Erro]: Campo "Passo" tem que ser um intervalo válido intre os campos "Inicio" e "Fim"')
    }
        // } else {
    var contagem = (Number(inicio.value) + Number(passo.value))
        //     if (contagem => fim) {
        //         res.innerHTML = `Iniciando contagem ${contagem}`
        //     }
            
        // }

    
    while (Number(inicio.value) <= Number(fim.value)) {
        passo++
        res.innerHTML = `Iniciando contagem ${contagem}`
    }

}