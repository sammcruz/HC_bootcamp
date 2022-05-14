
// exemplo laço simples
// var tabuada = 7
// for (var i = 0; i < 10; i++) {
//     console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
// }

// exemplo laço duplo
// for (var tabuada = 0; tabuada < 10; tabuada++) {
//     for (var i = 0; i < 10; i++) {
//         console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i);
//     }
// }

var numeroSorteado = Math.floor(Math.random() * 10);

for (var i = 0; i < 10; i++) {
    if (numeroSorteado == i) {
        console.log('Seu número foi encontrado, ele é: ' + numeroSorteado)
    }
}

// exemplos de estrutura de repetição while
var achou = false;

var tabuada = 7;
var repeticoes = 1;
while(repeticoes <= 10) {
    var resultado = tabuada * repeticoes
    console.log(resultado)
    repeticoes ++;
}

while (!achou) {
    var numeroSorteado = Math.floor(Math.random() * 10);
    if (numeroSorteado === 2) {
        console.log("O número sorteado é: " + numeroSorteado)
        break
    } else {
        console.log("Poxa, seu numero é: " + numeroSorteado)
    }

}