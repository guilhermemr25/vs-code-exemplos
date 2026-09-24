e:\VSCode Exercícios\2_SwitchCase\n3_LojaTech.js//Guilherme Martins Ramos

let pedido = prompt(`Selecione o erro:

100
201
301
404
500
 
➡️ Digite o NÚMERO do erro que deseja escolher:`);

switch (pedido) {
    case "100":
        alert("Conexão Estabelecida!");
        break; // break interrompe imediatamente a execução de loops
    case "201":
        alert("Falha no Login!");
        break;
    case "301":
        alert("Servidor Lotado!");
        break;
    case "404":
        alert("Sala Não Encontrada!");
        break;
    case "500":
        alert("Erro Fatal do Sistema!");
        break;
    default:
        alert("Código desconhecido...");
        break;
}