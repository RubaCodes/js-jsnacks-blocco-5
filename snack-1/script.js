//array zucchine

const zucchine = [
  {
    tipo: 'a',
    lunghezza: 5,
    peso: 100,
  },
  {
    tipo: 'b',
    lunghezza: 6,
    peso: 110,
  },
  {
    tipo: 'c',
    lunghezza: 7,
    peso: 120,
  },
  {
    tipo: 'd',
    lunghezza: 8,
    peso: 130,
  },
  {
    tipo: 'e',
    lunghezza: 9,
    peso: 140,
  },
  {
    tipo: 'f',
    lunghezza: 10,
    peso: 150,
  },
  {
    tipo: 'g',
    lunghezza: 11,
    peso: 160,
  },
  {
    tipo: 'h',
    lunghezza: 12,
    peso: 170,
  },
  {
    tipo: 'i',
    lunghezza: 13,
    peso: 180,
  },
  {
    tipo: 'i',
    lunghezza: 14,
    peso: 190,
  },
];

let totalWeight = 0;
for (let i = 0; i < zucchine.length; i++) {
  totalWeight += zucchine[i].peso;
}

console.log(`il peso totale in grammmi e'${totalWeight}`);
