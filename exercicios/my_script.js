var texto = window.prompt("Escreva um texto para o body: ")
document.writeln(`<br/>${texto}`)
var n1 = window.prompt('Digite n1: ')
var n2 = window.prompt('Digite n2: ')
document.write(`<br/>A soma de n1 com n2 é ${Number(n1)+Number(n2)}.<br/> E a quantidade de caracteres do texto é 
                ${texto.length}<br/> que em maiúsculo fica ${texto.toUpperCase()} `)
document.write(`<br/>n1 em moeda brasileira fica :
                ${Number(n1).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
document.write(`<br/> <h1> ${texto} </h1>`)
window.alert(n1>10?'é maior q 10 macho':'é menor ou igual a 10 major')
