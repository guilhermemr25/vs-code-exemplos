//Guilherme Martins Ramos

let valor = 3000
let pedido = prompt(`Selecione a sua região:

N → Norte
NE → Nordeste
SE → Sudeste
S → Sul
 
➡️ Digite as LETRAS MAIÚSCULAS da região que deseja efetuar a entrega:`);


switch (pedido) {
    case "N":
        alert("Com a taxa de entrega seu notebook de 3000R$ sairá por " + valor*1.20 + " R$. (taxa de 20%)");
        break; // break interrompe imediatamente a execução de loops
    case "NE":
        alert("Com a taxa de entrega seu notebook de 3000R$ sairá por " + valor*1.15 + " R$. (taxa de 15%)");
        break;
    case "SE":
        alert("Com a taxa de entrega seu notebook de 3000R$ sairá por " + valor*1.10 + " R$. (taxa de 10%)");
        break;
    case "S":
        alert("Com a taxa de entrega seu notebook de 3000R$ sairá por " + valor*1.08 + " R$. (taxa de 8%)");
        break;
    default:
        alert("Entrega indisponível para esta região...");
        break;
}
