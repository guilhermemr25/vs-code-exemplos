let valor = prompt("Quanto custou a sua compra? (somente número)");
let clientePremium = prompt("Você é cliente premium? (s/n)");

let resultado = (clientePremium === "s" || clientePremium === "S")
    ? "Parabéns! Você ganhou 20% de desconto por ser cliente premium! Sua compra de " + valor + " reais sairá por " + (valor * 0.8) + " reais!"
    : (clientePremium === "n" || clientePremium === "N")
        ? "Você não é cliente premium e não ganhou desconto. Sua compra sairá por " + valor + " reais."
        : "ERRO!";

alert(resultado);
