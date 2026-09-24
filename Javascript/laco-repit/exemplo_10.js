let soma = 0;
const numeros = [5, 8, 3, 0];
let indice = 0;
let numero = numeros[indice];

while (numero !== 0) {
    soma = soma + numero;
    indice++;
    numero= numeros[indice];
}

console.log("Soma total: " + soma);