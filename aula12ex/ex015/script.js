function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.querySelector('div#res')
    if (Number(fano.value.length) <= 3 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Ano inválido. Por favor, verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
                res.innerHTML = `Detectamos um menino com ${idade} ano(s) de idade.`
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
                res.innerHTML = `Detectamos um garoto com ${idade} ano(s) de idade.`
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                res.innerHTML = `Detectamos um homem com ${idade} ano(s) de idade.`
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                res.innerHTML = `Detectamos um senhor com ${idade} ano(s) de idade.`
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
                res.innerHTML = `Detectamos uma menina com ${idade} ano(s) de idade.`
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
                res.innerHTML = `Detectamos uma garota com ${idade} ano(s) de idade.`
            } else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                res.innerHTML = `Detectamos uma mulher com ${idade} ano(s) de idade.`
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                res.innerHTML = `Detectamos uma senhora com ${idade} ano(s) de idade.`
            }
        }
        res.style.textAlign = 'center'
        img.style.marginTop = '25px'
        res.appendChild(img)
    }
    
}


