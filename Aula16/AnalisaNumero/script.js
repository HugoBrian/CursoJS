var i = 0
var v = []
var valor = []
var txt = document.getElementById('txt')

function naLista(n){
    for(j in valor){
        if(n == valor[j]){
            return true
        } 
    }
    return false
}


function adicionar(){
    let num = document.getElementById('num')
    let n = Number(num.value)
    if(naLista(n)){
        alert(`Número ${n} já inserido.`)
        return
    }
    num.value = ''
    num.focus()
    txt.innerHTML = ''
    if( n == '' || n < 1 || n > 100 ) {
        alert("Número inválido.")
        return
    } else {
        let valores = document.getElementById('select-num')

        v.push(document.createElement('option'))
        v[i].setAttribute('id',`op${i}`)
        valores.appendChild(v[i])
        valores[i].innerText = `Valor ${n} adicionado.`
        valor.push(n)
        i++
    }
}

function finalizar(){
    if(valor == ''){
        alert('Adicione valores antes de finalizar!')
        return
    }

    
    txt.innerHTML = `<p>Ao todo, temos ${v.length} números cadastrados.</p>`
    
    var maior = Math.max.apply(null, valor );
    txt.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    var minimo = Math.min.apply(null, valor );
    txt.innerHTML += `<p>O menor valor informado foi ${minimo}.</p>`
    let soma = 0
    for(i in valor){
        soma += valor[i]
    }
    txt.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    txt.innerHTML += `<p>A média dos valores digitados é ${(soma/valor.length).toFixed(2).replace('.',',')}.</p>`
}