let saldo = 100;

function iniciarJogo() {
    updateSaldo();
}

function realizarAposta() {
    let apostaInput = document.getElementById('aposta');
    let pilotoInput = document.getElementById('piloto');

    let aposta = parseFloat(apostaInput.value);
    let escolhaPiloto = parseInt(pilotoInput.value);

    if (isNaN(aposta) || aposta < 5 || aposta > saldo || isNaN(escolhaPiloto) || escolhaPiloto < 1 || escolhaPiloto > 5) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let pilotoVencedor = Math.floor(Math.random() * 5) + 1;

    console.log("Piloto Vencedor:", pilotoVencedor);


    if (escolhaPiloto === pilotoVencedor) {
        let ganho = aposta * 2;
        saldo += ganho;
        exibirResultado(`Parabéns! Seu piloto venceu. Você ganhou R$${ganho}.`);
    } else {
        saldo -= aposta;
        exibirResultado(`Infelizmente, seu piloto não venceu. Você perdeu R$${aposta}.`);
    }

    updateSaldo();
}

function updateSaldo() {
    document.getElementById('saldo').textContent = `Your Current Balance: R$${saldo}`;
}

function exibirResultado(mensagem) {
    document.getElementById('resultado').textContent = mensagem;
}

window.onload = iniciarJogo;
