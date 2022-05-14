function soma (operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC
}

var resultadoDaSoma = soma (1, 2);
var resultadoDeNovaSoma = soma(10, 60);

console.log(resultadoDaSoma);
console.log(resultadoDeNovaSoma);

function olaGama(nome) {
    console.log('Olá Gama!, você é o ' + nome)
}

olaGama('Samantha')

// exemplo com 'for of'

var language = "GamaAcademy";

var palavra = "";
for (var i of language) {
    palavra += i;
    console.log(palavra)
}

// exemplo com 'for in'
const dadosPessoais = {nome: "Samantha", sobrenome: "Cruz", idade: 29, email:"samantha@samantha.com.br"};

for (let i in dadosPessoais) {
    console.log(i)
    console.log(dadosPessoais[i])
}