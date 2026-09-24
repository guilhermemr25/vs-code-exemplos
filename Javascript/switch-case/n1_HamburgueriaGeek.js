//Guilherme Martins Ramos

let pedido = Number(prompt(`Selecione um item:

[ 1 ] X-Burguer 🍔
[ 2 ] X-Salada 🥗
[ 3 ] Hot Dog 🌭
[ 4 ] Batata Frita 🍟
 
➡️ Digite o NÚMERO do item que deseja escolher:`));

switch (pedido) {
    case 1:
        alert("Você escolheu um X-Burguer! 🍔 Bom apetite!");
        break; // break interrompe imediatamente a execução de loops
    case 2:
        alert("Você escolheu um X-Salada! 🥗 Bom apetite!");
        break;
    case 3:
        alert("Você escolheu um Hot Dog! 🌭 Bom apetite!");
        break;
    case 4:
        alert("Você escolheu uma Batata Frita! 🍟 Bom apetite!");
        break;
    default:
        alert("Código inválido. Pedido não encontrado.");
        break;
}