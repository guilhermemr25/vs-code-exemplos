const idade = [-2, -1, 18];
let indice = 0;
let idade = idades[indice];

while (idade < 0) {
    console.log("Idade invalida!");
    indice++;
    idade = idades[indice];
}

console.log("Idade cadastrada com sucesso!")
    