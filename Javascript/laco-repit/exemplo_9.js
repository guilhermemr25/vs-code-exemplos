const tentativas = ["9999", "1111", "1234"];
let indice = 0;
let senha = tentativas[indice];

while (senha !== "1234") {
    console.log("Senha incorreta! Tente novamente.");
    indice++;
    senha = tentativas[indice];
}

console.log("Acesso liberado!");

