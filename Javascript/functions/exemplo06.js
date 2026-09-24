function verificarAprovacao(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarAprovacao(8));
console.log(verificarAprovacao(4));