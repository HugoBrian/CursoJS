function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == '' ||  fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        return
    }

    var idade = ano - fano.value
    var checkmas = window.document.getElementById('mas')
    var sexo
    var img = window.document.getElementById('imagem')
    if (checkmas.checked) {
        sexo = 'masculino'
        document.getElementById('secao').style.backgroundColor = 'rgb(170, 243, 163)'
    } else {
        sexo = 'feminino'
        document.getElementById('secao').style.backgroundColor = 'rgb(252, 217, 232)'
    }
    
    if (sexo == 'masculino' && (idade >= 0 && idade < 10 )) {
        img.src = 'foto-bebe-m.png'
        res.innerText = 'Homem com '+idade+' anos'
    }    
    if (sexo == 'masculino' && (idade >= 10 && idade < 25)) {
        img.src = 'foto-jovem-m.png'
        res.innerText = 'Homem com '+idade+' anos'
    }
    if (sexo == 'masculino' && (idade >= 25 && idade < 65)) {
        img.src = 'foto-adulto-m.png'
        res.innerText = 'Homem com '+idade+' anos'
    }
    if (sexo == 'masculino' && (idade >= 65)) {
        img.src = 'foto-idoso-m.png'
        res.innerText = 'Homem com '+idade+' anos'
    }
    if (sexo == 'feminino' && (idade >= 0 && idade < 10 )) {
        img.src = 'foto-bebe-f.png'
        res.innerText = 'Mulher com '+idade+' anos'
    }    
    if (sexo == 'feminino' && (idade >= 10 && idade < 25)) {
        img.src = 'foto-jovem-f.png'
        res.innerText = 'Mulher com '+idade+' anos'
    }
    if (sexo == 'feminino' && (idade >= 25 && idade < 65)) {
        img.src = 'foto-adulto-f.png'
        res.innerText = 'Mulher com '+idade+' anos'
    }
    if (sexo == 'feminino' && (idade >= 65)) {
        img.src = 'foto-idoso-f.png'
        res.innerText = 'Mulher com '+idade+' anos'
    }

    document.getElementById('secao').style.width = '500px'
    document.getElementById('secao').style.height= '500px'
}