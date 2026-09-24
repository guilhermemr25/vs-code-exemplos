let bateria = Number(prompt("Qual a bateria do seu drone?"));
alert("Verificando se podemos iniciar o voo...");

let resultado = (bateria >= 50)
    ? "Pronto para voar!"
    : "Bateria Insulficiente";

alert(resultado);
