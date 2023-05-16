var idade = 17
console.log(`Você tem ${idade}`)
if (idade < 16) {
    console.log('NÃO VOTA')
} else if (idade < 18 || idade > 65) {
        console.log('VOTO OPICIONAL')
    } else {
        console.log('VOTO OBRIGATÓRIO')
    }