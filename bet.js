let saldo = 100;
let raceInterval;
let pilotoVencedor;
let apostaInput;
let pilotoInput;
let aposta;
let escolhaPiloto;

window.onload = iniciarJogo;

// Initial function of the game
function iniciarJogo() {
    updateSaldo();
    resetCarro();
}

// Betting conference function
function realizarAposta() {
    apostaInput = document.getElementById('aposta');
    pilotoInput = document.getElementById('piloto');

    aposta = parseFloat(apostaInput.value);
    escolhaPiloto = parseInt(pilotoInput.value);

    if (isNaN(aposta) || aposta < 5 || aposta > saldo || isNaN(escolhaPiloto) || escolhaPiloto < 1 || escolhaPiloto > 5) {
        alert("Por favor, insira valores válidos.");
        clearInterval(raceInterval);
        return;
    }
    travarCampo();
    raceInterval = setInterval(moveCars, 50);
}

// Function Moving Cars
function moveCars() {
    let cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        if (parseInt(car.style.left) < 980) {
            let distance = Math.floor(Math.random() * 10) + 1;
            car.style.left = (parseInt(car.style.left) || 0) + distance + 'px';
        }

        if (parseInt(car.style.left) >= 980) {
            clearInterval(raceInterval);
            pilotoVencedor = car.id;
            verificarVencedor();
        }
    });
}

// Function that verifies the winner
function verificarVencedor() {

    switch(pilotoVencedor) {
        case "car1":
            pilotoVencedor = 1;
            alert("Pilot N° 1 WON");
          break;
        case "car2":
            pilotoVencedor = 2;
            alert("Pilot N° 2 WON");
          break;
        case "car3":
            pilotoVencedor = 3;
            alert("Pilot N° 3 WON");
          break;
        case "car4":
            pilotoVencedor = 4;
            alert("Pilot N° 4 WON");
          break;
        case "car5":
            pilotoVencedor = 5;
            alert("Pilot N° 5 WON");
          break;
    }

    if (escolhaPiloto === pilotoVencedor) {
        let ganho = aposta * 2;
        saldo += ganho;
        exibirResultado(`Congratulations! Its pilot won. You've earned R$${ganho}.`);
    } else {
        saldo -= aposta;
        exibirResultado(`Unfortunately, his driver didn't win. You've lost R$${aposta}.`);
    }

    updateSaldo();
    resetCarro();
    liberarCampo();
}

// Function that places the cars at the start of the race
function resetCarro() {
    let cars = document.querySelectorAll('.car');
    let atraso = 500;
    cars.forEach((car, index) => {
        setTimeout(() => { 
            car.style.left = '0px';
    }, index * atraso);
    });
}

// Function to update the player's balance
function updateSaldo() {
    document.getElementById('saldo').textContent = `Current Balance: R$${saldo}`;
}

// Display the result in HTML
function exibirResultado(mensagem) {
    document.getElementById('result').textContent = mensagem;
}

// Text field lock function
function travarCampo() {
    var campo1 = document.getElementById("aposta");
    var campo2 = document.getElementById("piloto");
    campo1.setAttribute("readonly", "true");
    campo2.setAttribute("readonly", "true");
}

// Function of releasing the text field
function liberarCampo() {
    var campo1 = document.getElementById("aposta");
    var campo2 = document.getElementById("piloto");
    campo1.removeAttribute("readonly");
    campo2.removeAttribute("readonly");
}

