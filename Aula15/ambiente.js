let num = [3, 8, 2, 1, 7, 3, 5, 3]
console.log(`Vetor original : ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
num.sort()
console.log(`O vetor ordenado é ${num}`)
for(let pos in num){
    console.log(`O elemento da posição ${pos} é ${num[pos]}`)
}
console.log(num.indexOf(3))