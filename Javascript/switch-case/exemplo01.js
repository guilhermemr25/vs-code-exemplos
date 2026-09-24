let textoMenu = `Selecione uma opção:

[ 1 ] Guerreiro ⚔️
[ 2 ] Mago 🧙
[ 3 ] Arqueiro 🏹
[ 4 ] Assasino 🗡️
 
➡️ Digite o NÚMERO da classe que deseja escolher:`;

let escolha = prompt(textoMenu);
escolha = Number(escolha);

switch (escolha) {
    case 1:
        alert("Você escolheu a classe Guerreiro! ⚔️ Foco em força e defesa!");
        break; // break interrompe imediatamente a execução de loops
    case 2:
        alert("Você escolheu a classe Mago! 🧙 Magias poderosas, mas com pouca vida!");
        break;
    case 3:
        alert("Você escolheu a classe Arqueiro! 🏹 Ataques à distância com alta precisão!");
        break;
    case 4:
        alert("Você escolheu a classe Assasino! 🗡️ Muito dano crítico e furtividade!");
        break;
    default:
        alert("Opção inválida! Você virou um aldeão que planta batatas! 🥔");
        break;
}
