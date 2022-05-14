class Matematica {
    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
    multiplicacao(valorA, valorB) {
        return valorA * valorB;
    }
    divisao(valorA, valorB) {
        return valorA / valorB;
    }
}
var instancia = new Matematica();
console.log('Os valores são: 1 e 2')
console.log('a soma dos valores é: '+ instancia.soma(1,2))
console.log('a subtração dos valores é: '+ instancia.subtracao(1,2))
console.log('a multiplicacao dos valores é: '+ instancia.multiplicacao(1,2))
console.log('a divisao dos valores é: '+ instancia.divisao(1,2))