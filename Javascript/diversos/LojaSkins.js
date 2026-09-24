//Guilherme Martins Ramos

let valor = Number(prompt("Qual foi o valor total de sua compra?"));

let pedido = Number(prompt(`Escolha seu método de pagamento:

[ 1 ] Pix (possui descontos)
[ 2 ] Boleto (possui descontos)
[ 3 ] Cartão (possui taxa)
  
➡️ Digite o NÚMERO do método`));

switch (pedido) {
    case 1:
        if (valor<=100) {
            alert("Você ganhou um desconto de 5%!");
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Pix
                Valor final da compra: ` + valor*0.95 + ` reais
                Obrigado pela sua compra!`);
        } else {
            alert("Você ganhou um desconto de 15%!")
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Pix
                Valor final da compra: ` + valor*0.85 + ` reais
                Obrigado pela sua compra!`);
        }
        break; // break interrompe imediatamente a execução de loops
    case 2:
        if (valor<=100) {
            alert("Você ganhou um desconto de 5%!");
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Boleto
                Valor final da compra: ` + valor*0.95 + ` reais
                Obrigado pela sua compra!`);
        } else {
            alert("Você ganhou um desconto de 15%!");
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Boleto
                Valor final da compra: ` + valor*0.85 + ` reais
                Obrigado pela sua compra!`);
        }
        break;
    case 3:
        let nomeMetodo = "Cartão";
        if (valor<=200) {
            alert("Você pagará uma taxa fixa de R$8,00.");
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Cartão
                Valor final da compra: ` + (valor+8) + ` reais
                Obrigado pela sua compra!`);
        } else {
            alert("Você não pagara taxa de operadora!");
            alert(`DADOS FINAIS DA COMPRA:
                Método escolhido: Cartão
                Valor final da compra: ` + valor + ` reais
                Obrigado pela sua compra!`);
        }
        break;
    default:
        alert("ERRO! Método de pagamento invalido!");
        break;
}