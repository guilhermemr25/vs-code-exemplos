const opcoes = ["1", "2", "0"];
let indice = 0;
let opcao = "";

while (opcao !== "0") {
    console.log("---MENU---");
    console.log("1 - Ver mensagem");
    console.log("2 - Ver aviso");
    console.log("0 - Sair");

    opcao = opcoes[indice];
    indice++;

    if (opcao === "1") {
        console.log("Bem-vindo!");
    }

    if (opcao === "2") {
        console.log("Continue estudando Javascript!")
    }

    if (opcao === "0") {
        console.log("Programa finalizado.")
    }
}
