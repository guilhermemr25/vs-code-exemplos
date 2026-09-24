function calcularSalario (salario, bonus) {
    let valorBonus = (salario * bonus) / 100;
    let salarioFinal = salario + valorBonus;

    return salarioFinal;
}

let salario = calcularSalario (3000, 10);
console.log(`Salário final: R$ ${salario}`);