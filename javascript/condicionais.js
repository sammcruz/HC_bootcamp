
// Exemplo com if else if e else
var nome = 'Cruz'

if (nome == 'Samantha') {
    console.log("Legal! Seu nome é esse mesmo");
} else if (nome == 'Cruz') {
    console.log("Tudo bem! Você também serve");
} else {
    console.log("Que pena! Seu nome não é Samantha");
}

// exemplo com switch
switch (nome) {
    case 'Samantha':
        console.log("Legal! Seu nome é esse mesmo");
        break;
    case 'Cruz':
        console.log("Tudo bem! Você também serve");
        break;
    default:
        console.log("Que pena! Seu nome não é Samantha");
        break;
}
