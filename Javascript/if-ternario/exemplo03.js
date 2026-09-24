let nota = Number(prompt("Digite a nota (0 a 10):"));

// Encadeamento: avalia da esquerda para a direita.
let conceito = nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "D";
// ?=if e :=else

console.log("Conceito: " + conceito);
alert("Sua nota é " + nota + " e seu conceito é: " + conceito);