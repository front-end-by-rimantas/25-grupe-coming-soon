import { suma } from './components/sum.js';
import { multiply as daugyba } from './components/multiply.js';

import { matamatika } from './components/matematika.js';

const rez1lt = matamatika.sudeti(8, 5);
const rez2lt = matamatika.atimti(8, 5);
const rez3lt = matamatika.sudauginti(8, 5);
const rez4lt = matamatika.dalinti(8, 5);

const rez1en = matamatika.sum(8, 5);
const rez2en = matamatika.subtract(8, 5);
const rez3en = matamatika.multiply(8, 5);
const rez4en = matamatika.divide(8, 5);

const rez1rus = matamatika.rus1(8, 5);
const rez2rus = matamatika.rus2(8, 5);
const rez3rus = matamatika.rus3(8, 5);
const rez4rus = matamatika.rus4(8, 5);

console.log(rez1lt);
console.log(rez2lt);
console.log(rez3lt);
console.log(rez4lt);

console.log(rez1en);
console.log(rez2en);
console.log(rez3en);
console.log(rez4en);

console.log(rez1rus);
console.log(rez2rus);
console.log(rez3rus);
console.log(rez4rus);