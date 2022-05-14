console.log('Javascript Carregado')

function validaCPF(cpf) {
    if (cpf.length != 11) {
        console.log("CPF contém " + cpf.length + " caracteres");
        return false;
    } else{

        var numero = cpf.substring(0, 9);
        var digito = cpf.substring(9);

        var soma = 0;
        for (var i = 10; i > 1; i--) {
            soma += numero.charAt(10 - i) * i;
        }

        console.log(soma)

        // validação do primeiro dígito:
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
        if (resultado != digito.charAt(0)) {
            console.log("a soma dos numeros é diferente da primeira posição do digito");
            return false
        }

        //validação do segundo dígito
        soma = 0;
        numero = cpf.substring(0, 10);

        for (var k = 11; k > 1; k--) {
            soma += numero.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digito.charAt(1)) {
            console.log("a soma dos numeros é diferente da segunda posição do digito");
            return false
        }

        return true;
    }
}

function validacao(){
    console.log("Iniciando validação de CPF")
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);

    var resultado = validaCPF(cpf);
    if (resultado) {
        document.getElementById('success').style.display = 'block'
    } else {
        document.getElementById('error').style.display = 'block'
    }
}