let temperatura = prompt("Qual a temperatura da sua nave? (somente número)");
alert("Verificando, um instante...");

// ?=if e :=else
let resultado = (temperatura <= 30)
    ? "Motores estáveis!"
    : (temperatura >= 30 && temperatura < 45)
        ? "Atenção: Aquecimento Detectado!"
        : (temperatura >= 45)
            ? "PERIGO: Superaquecimento Crítico!"
            : "ERRO! Temperatura não detectada!";

alert(resultado);
