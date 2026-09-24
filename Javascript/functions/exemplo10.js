function calcularPrecoComDesconto (preco, desconto) {
    let valorDesconto = (preco * desconto) / 100;
    let precoFinal = preco - valorDesconto;
    
    return precoFinal;
}

let preco = calcularPrecoComDesconto (200, 15);
console.log(`Preço final: R$ ${preco}`);