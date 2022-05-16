// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
const zucchine = [
  {
    tipo: 'a',
    lunghezza: 10,
    peso: 100,
  },
  {
    tipo: 'b',
    lunghezza: 11,
    peso: 110,
  },
  {
    tipo: 'c',
    lunghezza: 12,
    peso: 120,
  },
  {
    tipo: 'd',
    lunghezza: 13,
    peso: 130,
  },
  {
    tipo: 'e',
    lunghezza: 14,
    peso: 140,
  },
  {
    tipo: 'f',
    lunghezza: 15,
    peso: 150,
  },
  {
    tipo: 'g',
    lunghezza: 16,
    peso: 160,
  },
  {
    tipo: 'h',
    lunghezza: 17,
    peso: 170,
  },
  {
    tipo: 'i',
    lunghezza: 18,
    peso: 180,
  },
  {
    tipo: 'i',
    lunghezza: 19,
    peso: 190,
  },
];

const longer = [];
const shorter = [];
for (let i = 0; i < zucchine.length; i++) {
  zucchine[i].lunghezza >= 15
    ? longer.push(zucchine[i])
    : shorter.push(zucchine[i]);
}
let sumShorter = 0;
let sumLonger = 0;
for (let i = 0; i < shorter.length; i++) {
  sumShorter += shorter[i].peso;
}
for (let i = 0; i < longer.length; i++) {
  sumLonger += longer[i].peso;
}

console.log(
  `Il peso delle piu corte vale ${sumShorter}g , mentre quello delle piu lunghe vale ${sumLonger}gr`
);
