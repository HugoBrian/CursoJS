function gerartab(){
    var n = document.getElementById('num').value
    var tab = document.getElementsByName('select')
    
    if(n == ''){
        alert('Preencha o campo com um número!')
        return
    }

    for(var i=1; i<=10 ; i++){   
        document.getElementById(`op${i}`).innerText = `${n} x ${i} = ${n*i}`    
    }
}