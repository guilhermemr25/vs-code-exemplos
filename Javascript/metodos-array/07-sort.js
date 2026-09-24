// 7. sort() - Organizando
// Ordena os elementos do array (por padrão como texto/ordem alfabética).
// A ATENÇÃO: sort() altera o array original!

console.log("=== 7. sort() ===");

// Exemplo 1 - nomes (ordem alfabética)
const nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log("Nomes ordenados:", nomes); // ["Ana", "Bruno", "Carlos "Pedro"]

// Exemplo 2 - cidades (ordem alfabética)
const cidades =["São Paulo", "Campinas", "Valinhos", "Vinhedo"];
cidades.sort();
console.log("Cidades ordenadas:", cidades); // ["Campinas", "São Paulo", "Valinhos", "Vinhedo"]

// Exemplo 3 - números (A famosa pegadinha!)
const numeros =[10, 2, 30, 5];

// Se usarmos apenas numeros.sort():
// 0 35 converte para texto e ordena como string ("18", "2", "30", "5"), dando: [10, 2, 30, 5] ου [10, 20...]!
// Para ordenar números corretamente em ordem crescente:
numeros.sort((a, b) => a - b);
console.log("Números ordenados corretamente:", numeros); // [2, 5, 18, 30]

// 💡 Dica:
// "Esse (a, b) => a bé uma função passada para o sort(). Na próxima aula vamos entender exatamente o que está acontecendo!"

// fim