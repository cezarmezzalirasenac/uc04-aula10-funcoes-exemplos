// Calcule o percentual de comissão de um grupo de vendedores,
// baseado na sua performance e no seu nível.

// lista de vendedores
// vendedor : nome, nível, valor total de vendas

type Vendedor = {
  nome: string;
  nivel: "I" | "II" | "III";
  valorTotalVendas: number;
};

const vendedores: Vendedor[] = [
  {
    nome: "Fulano da Silva",
    nivel: "I",
    valorTotalVendas: 50000,
  },
  {
    nome: "Ciclano da Silva",
    nivel: "II",
    valorTotalVendas: 20000,
  },
  {
    nome: "Beltrano da Silva",
    nivel: "III",
    valorTotalVendas: 150000,
  },
  {
    nome: "Antonio da Silva",
    nivel: "II",
    valorTotalVendas: 30000,
  },
];

for (let vendedor of vendedores) {
  console.log(
    vendedor.nome,
    nomeNivel(vendedor.nivel),
    vendedor.valorTotalVendas,
    calcularComissaoPorTotal(vendedor.valorTotalVendas)
  );
}

function calcularComissaoPorTotal(valorTotalVendas: number) {
  // até 10000 - 1,5%
  // até 50000 - 2,5%
  // até 100000 - 5%
  // acima de 10000 - 12%

  if (valorTotalVendas <= 10_000) {
    return valorTotalVendas * 0.015;
  } else if (valorTotalVendas <= 50_000) {
    return valorTotalVendas * 0.025;
  } else if (valorTotalVendas <= 100_000) {
    return valorTotalVendas * 0.05;
  } else {
    return valorTotalVendas * 0.12;
  }
}

function calcularComissao(nivel: "I" | "II" | "III", valorTotalVendas: number) {
  const porcentual = porcentualComissao(nivel);
  switch (nivel) {
    case "I":
      return valorTotalVendas * porcentual;
    case "II":
      return valorTotalVendas * porcentual;
    case "III":
      return valorTotalVendas * porcentual;
    default:
      return 0;
  }
}

function porcentualComissao(nivel: "I" | "II" | "III") {
  const porcentuais = {
    I: 0.05,
    II: 0.075,
    III: 0.12,
  };
  return porcentuais[nivel];
}

function nomeNivel(nivel: "I" | "II" | "III") {
  const niveis = {
    I: "Junior",
    II: "Pleno",
    III: "Senior",
  };
  return niveis[nivel];
}

let valor = 1;

valor = 2;

function alteraValor(novoValor: number) {
  valor = novoValor;
}

// const vendedor = vendedores[1];

// console.log(
//   vendedor.nivel,
//   vendedor.valorTotalVendas,
//   calcularComissao(vendedor.nivel, vendedor.valorTotalVendas)
// );
