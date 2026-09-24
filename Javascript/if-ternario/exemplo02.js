let valorCompra = Number(prompt("Valor da compra:"));

//Se valorCompra >= 100 aplica 10% de desconto, senão mantem o valor.
let valorFinal = valorCompra >= 100 ? valorCompra * 0.9 : valorCompra;
// ?=if e :=else

let mensagem = "Valor final: R$ " + valorFinal.toFixed(2);

console.log(mensagem);
alert(mensagem);