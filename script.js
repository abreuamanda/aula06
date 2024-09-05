let soma = 0;
let contador = 0;
let entrada;

while (true) {
    entrada = prompt("Digite um número (ou 'sair' para encerrar):");
    
    if (entrada === 'sair' || entrada === 'Sair') {
        break;
    }
    
    let numero = parseFloat(entrada);
    
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        continue;
    }
    
    soma += numero;
    contador++;
    
    let media = soma / contador;
    
    alert(`Soma atual: ${soma}\nMédia atual: ${media}`);
}

alert(`Programa encerrado.\nSoma final: ${soma}\nMédia final: ${soma / contador}`);