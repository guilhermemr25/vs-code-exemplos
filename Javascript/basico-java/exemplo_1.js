// 1. Entrada de dados do usuário
let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");

// 2. Convertendo a idade de texto para um número
let idadeNumero = Number(idade);

// 3. Processamento (lógica)
let anoAtual = 2026;
let anoNascimento = anoAtual - idadeNumero;

// 4. Saída de dados
alert("Olá " + nome + "! \n Você nasceu em " + anoNascimento + ".");
// \n serve para pular linhas

console.log("---Dados do usuário---");
console.log("Nome digitado: " + nome);
console.log("Idade digitada: " + idade);
console.log("Ano de nascimento: " + anoNascimento);