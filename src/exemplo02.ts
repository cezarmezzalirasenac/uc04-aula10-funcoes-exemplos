/**
3 - Uma companhia aérea está adquirindo uma nova aeronave do tipo widebody, que
possui dois corredores com 3 fileiras, sendo que as fileiras das janelas possuem 3
assentos e a fileira do meio possui 5 poltronas, sendo no total 20 fileiras.
Simule um programa que o usuário possa informar qual a fileira e
qual a poltrona que ele deseja sentar, sendo que as fileiras devem ser identificadas
de A a Z e as poltronas de 1 a 11.
O usuário deverá informar a posição, por exemplo A05, e então na matriz, a célula
correspondente deve ser preenchida com A05. Caso essa poltrona já esteja ocupada,
imprimir fileira a fileira as poltronas, um espaço para mostrar os corredores e caso
esteja ocupada, mostrar número da poltrona,
e caso esteja livre mostrar a palavra livre.
 */

type Poltrona = {
  numeroPoltrona: number;
  fileira: string;
  ocupado: boolean;
};

type Fileira = {
  numeroFileira: string;
  poltronas: Poltrona[];
};

const fileira: Fileira = {
  numeroFileira: "A",
  poltronas: criaPoltronas("A", 11),
};

function criaPoltronas(fileira: string, numeroPoltronas: number) {
  const poltronas: Poltrona[] = [];
  for (let i = 1; i <= numeroPoltronas; i++) {
    poltronas.push({
      numeroPoltrona: i,
      fileira,
      ocupado: false,
    });
  }
  return poltronas;
}

function criaFileiras(numeroFileiras: number) {
  const fileiras: Fileira[] = [];
  for (let i = 1; i <= numeroFileiras; i++) {
    const letraFileira = String.fromCharCode(64 + i);
    fileiras.push({
      numeroFileira: letraFileira,
      poltronas: criaPoltronas(letraFileira, 11),
    });
  }
  return fileiras;
}

const fileiras: Fileira[] = [];
const numeroFileiras = 11;
const numeroPoltronas = 20;

for (let i = 1; i <= numeroFileiras; i++) {
  const letraFileira = String.fromCharCode(64 + i);
  const poltronas: Poltrona[] = []
  for (let j = 1; j <= numeroPoltronas; j++) {
    poltronas.push({
      numeroPoltrona: j,
      fileira: letraFileira,
      ocupado: false,
    });
  }
  fileiras.push({
    numeroFileira: letraFileira,
    poltronas: criaPoltronas(letraFileira, 11),
  });
}



// const fileiras = criaFileiras(20)

console.log(fileiras[19]);
