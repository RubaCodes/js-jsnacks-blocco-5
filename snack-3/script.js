const cars = [
  {
    marca: 'a',
    modello: 'aa',
    alimetazione: 'benzina',
  },
  {
    marca: 'b',
    modello: 'bb',
    alimetazione: 'diesel',
  },
  {
    marca: 'c',
    modello: 'cc',
    alimetazione: 'gpl',
  },
  {
    marca: 'd',
    modello: 'dd',
    alimetazione: 'elettrico',
  },
  {
    marca: 'e',
    modello: 'ee',
    alimetazione: 'metano',
  },
  {
    marca: 'f',
    modello: 'ff',
    alimetazione: 'benzina',
  },
  {
    marca: 'g',
    modello: 'gg',
    alimetazione: 'diesel',
  },
  {
    marca: 'h',
    modello: 'hh',
    alimetazione: 'gpl',
  },
  {
    marca: 'i',
    modello: 'ii',
    alimetazione: 'elettrica',
  },
  {
    marca: 'j',
    modello: 'jj',
    alimetazione: 'metano',
  },
];

const benzina = cars.filter((e) => e.alimetazione === 'benzina');
const diesel = cars.filter((e) => e.alimetazione === 'diesel');
const eco = cars.filter(
  (e) => e.alimetazione !== 'diesel' && e.alimetazione !== 'benzina'
);
console.log(benzina, diesel, eco);

const gas = [];
const petrol = [];
const green = [];

cars.forEach((e) => {
  if (e.alimetazione === 'benzina') {
    gas.push(e);
  } else if (e.alimetazione === 'diesel') {
    petrol.push(e);
  } else {
    green.push(e);
  }
});

console.log(gas, petrol, green);
