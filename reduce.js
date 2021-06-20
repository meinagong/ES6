{ sitting: 3, standing: 2 }
const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

const deskTypes = desks.reduce(function(acc, cur) {
  if(cur.type === 'sitting') {
    acc.sitting += 1;
  }
  if(cur.type === 'standing') {
    acc.standing += 1;
  }
  return acc;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

function balancedParens(string) {
  return !string.split('').reduce(function(acc, cur) {
    if(acc < 0) {
      return acc;
    }
    if(cur === '(') {
      acc += 1;
    } 
    if(cur === ')') {
      acc -= 1;
    }
    return acc;
  }, 0);
}