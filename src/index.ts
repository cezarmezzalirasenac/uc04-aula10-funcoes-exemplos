// Entrada
// Processamento
// Saída

// funções, sub-programas, sub-rotinas, métodos

function calcular(valor1: number, valor2: number): number {
  const valorInicial = valor1 + valor2;
  const desconto = valorInicial * 0.1;
  const valorFinal = valorInicial - desconto;
  return valorFinal;
}

function main() {
  console.log(calcular(2, 2) === 3.6);
  console.log(acumulador);
  console.log(outroAcumulador);
}

const total = 1 + 1;

const valores: [number, number][] = [
  [2, 3],
  [1, 8],
  [3, 5],
];

let acumulador = 0;

for (let numeros of valores) {
  const total = calcular(numeros[0], numeros[1]);
  acumulador = acumulador + total;
}

let outroAcumulador = 0;
for (let i = 1; i < valores.length; i++) {
  const total = calcular(valores[i][0], valores[i][1]);
  outroAcumulador = outroAcumulador + total;
}

main();
