function contar(){
    var inicio = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('pas')
    var msg = window.document.getElementById('msg')
    
    if (fim.value == '') {
        msg.innerHTML = 'Impossível contar!'
        return
    }

    if (inicio.value == '') {
        msg.innerHTML = 'Impossível contar!'
        return
    }

    if (passo.value == '' || passo.value == 0) {
        window.alert('Passo inválido. Fazendo PASSO igual a 1')
        passo.value = 1
    }

    var n = Math.abs((fim.value - inicio.value)/passo.value)
    msg.innerHTML = ' Calculando: <br/>'
    var valor = inicio.value

    for( var i=0 ; i<=n ; i++){
        msg.innerHTML = msg.innerHTML + Number(valor) + '\u{1F449}'
        
        if ( Number(inicio.value) <= Number(fim.value) ) {
            valor = Number(valor) + Number(passo.value)
        } else {
            valor = Number(valor) - Number(passo.value)
        }

        if (i==n) {
            msg.innerHTML += '\u{1F3C1}'
        }
    }
}