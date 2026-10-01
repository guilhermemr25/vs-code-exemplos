// ==========================================================
// 2. NULLISH COALESCING (??)
// Define o valor padrao APENAS se fo 'null' ou 'undefined'.
// Preserva valores validos como 0, false e string vazia ("").
// ==========================================================

console.log("\n=== 2. Nullish Coalescing (??) ===");

// Exemplo 1: Substitui null ou undefined por valor padrao amigavel
const tema = null;
console.log("Tema:", tema ?? "claro"); // "claro"

const telefone = undefined;
console.log("Telefone:", telefone ?? "Não informado"); // "Não informado"

// Exemplo 2: preserva o numero 0, false é "" (string vazia)
const tentativas = 0;
console.log("Tentativas (preserva 0):", tentativas ?? 3); // 0

const apelido = "";
console.log("Apelido (preserva string vazia):", apelido ?? "Visitante"); // ""

const aceitouTermos = false;
console.log("Termos (preserva false):", aceitouTermos ?? true); // false