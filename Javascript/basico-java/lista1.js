// LISTA DE EXERCÍCIOS — VisualG ➜ JavaScript
//Guilherme Martins Ramos

//////////////////////////////
/////  NÍVEL 1 — BÁSICO  /////
//////////////////////////////

// 1. Olá mundo personalizado

let nome = "Gui";
console.log("Olá " + nome + "!");

// 2. Idade do usuário

let idade = "16";
console.log("Você tem " + idade + " anos!");

// 3. Soma simples

let num1 = 20;
let num2 = 47;
let soma = num1 + num2;
console.log("A soma de " + num1 + " e " + num2 + " é " + soma + "!");

// 4. Dobro de um número

let num = 15;
let dobro = num * 2;
console.log("O dobro de " + num + " é " + dobro + "!");

// 5. Concatenação

let nome2 = "Guilherme";
let cidade = "Valinhos";
console.log(nome2 + " mora em " + cidade);

////////////////////////////////
/////  NÍVEL 2 — CÁLCULOS  /////
////////////////////////////////

// 6. Média de 2 notas

let nota1 = 8.5;
let nota2 = 7.5;
let media = (nota1 + nota2) / 2;
console.log("A média das notas " + nota1 + " e " + nota2 + " é: " + media);

// 7. Média de 3 notas

let not1 = 6;
let not2 = 7.5;
let not3 = 9;
let med = (not1 + not2 + not3) / 3;
console.log("A média das notas " + not1 + ", " + not2 + " e " + not3 + " é: " + med);

// 8. Total de compra

let produto = "Camisetas";
let preço = 50.0;
let quantidade = 3;
let total = preço * quantidade;
console.log("Você comprou " + quantidade + " " + produto + " e gastou " + total + " reais!");

// 9. Desconto do produto

let pre = 100;
let desconto = pre * 0.9;
console.log("O produto custa " + pre + " reais, mas com desconto de 10% passara a custar " + desconto + " reais!");

// 10. Salário com bônus

let salario = 1200;
let bonus = salario * 1.2;
console.log("Seu salario é de " + salario + " reais, mas com bonus de 20% ele sobe para " + bonus + " reais!");

/////////////////////////////////
/////  NÍVEL 3 — IF / ELSE  /////
/////////////////////////////////

// 11. Aprovado ou reprovado

let média = 8;
if (media >= 7) {
  console.log("Parabéns, você foi aprovado!");
} else {
  console.log("Infelizmente, você foi reprovado.");
}

// 12. Par ou ímpar

let numero = 15;
if (numero % 2 === 0) {
  console.log("O número " + numero + " é par.");
} else {
  console.log("O número " + numero + " é ímpar.");
}

// 13. Maior de idade

let idade2 = 18;
if (idade2 >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// 14. Número positivo, negativo ou zero
let num3 = -5;
if (num3 > 0) {
  console.log("O número " + num3 + " é positivo.");
} else if (num3 < 0) {
  console.log("O número " + num3 + " é negativo.");
} else {
  console.log("O número é zero.");
}

// 15. Pode votar ou não?

let idade3 = 16;
if (idade3 >= 18) {
  console.log("Você pode votar.");
} else {
  console.log("Você não pode votar.");
}

///////////////////////////////
/////  NÍVEL 4 — ELSE IF  /////
///////////////////////////////

// 16. Classificação de nota

let nota = 85;
if (nota >= 90) {
  console.log("Nota: A");
} else if (nota >= 80) {
  console.log("Nota: B");
} else if (nota >= 70) {
  console.log("Nota: C");
} else if (nota >= 60) {
  console.log("Nota: D");
} else {
  console.log("Nota: F");
}

// 17. Classificação de idade

let idade4 = 25;
if (idade4 >= 0 && idade4 <= 12) {
  console.log("Criança");
} else if (idade4 >= 13 && idade4 <= 17) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

// 18. Semáforo

let cor = "vermelho";
if (cor === "vermelho") {
  console.log("Pare!");
} else if (cor === "amarelo") {
  console.log("Atenção!");
} else if (cor === "verde") {
  console.log("Siga!");
} else {
  console.log("Cor de semáforo inválida.");
}

// 19. Sistema de login

let usuario = "admin";
let senha = "123";
if (usuario === "admin" && senha === "123") {
  console.log("Login bem-sucedido!");
} else {
  console.log("Usuário ou senha incorretos.");
}

///////////////////////////
/////  DESAFIO FINAL  /////
///////////////////////////

// 20. Loja

let produto2 = "Camiseta";
let preço2 = 50.0;
let quantidade2 = 3;
let total2 = preço2 * quantidade2;
if (total2 > 100) {
  let desconto2 = total2 * 0.1;
  let totalComDesconto = total2 - desconto2;
  console.log(
    "Total: " + total2 + " reais. Você ganhou um desconto de 10%! Total com desconto: " + totalComDesconto + " reais.",
  );
} else {
  console.log("Total: " + total2 + " reais. Você não ganhou desconto.");
}
