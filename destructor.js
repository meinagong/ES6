// input: double([1, 2, 3])
// output: [2, 4, 6]
// array destructuring, recursion 
// and the rest/spread operators
// add a base case
// const [number, ...rest] = numbers

function double([number, ...rest]) {
  if(!number) {
    return []
  }
  let restDoubled = double(rest);
  return [number * 2, ...restDoubled]
  // const restDoubled = rest.length ? double(rest) : [];
  // return [number * 2, ...restDoubled];
};

console.log(double([]));


// const points = [[4, 5], [10, 1], [0, 40]];

// const result = points.map(([x, y]) => {
//   return {x, y};
// })

// console.log(result);

// const Google = {
//   locations: ['Mountain View', 'New York', 'London']
// };

// const {locations: [address]} = Google;
// console.log(address);

// const companies = [
//   { name: 'Google', address: 'Mountain View' },
//   { name: 'Facebook', address: 'Menlo Park' },
//   { name: 'Uber', address: 'San Francisco' }
// ]

// const [ { address } ] = companies;
// console.log(address);


// const companies = ['Google', 'Facebook', 'Uber'];

// const [firstCompany] = companies;
// const {length} = companies;
// const [name, ...rest] = companies
// console.log(rest);

// const savedFiled = {
//   extention: 'jpg',
//   name: 'repost',
//   size: 14040
// };

// function fileSummary({name, extention, size}, {color}) {
//   return `The ${color} file ${name}.${extention} is of size ${size}`;
// }

// const expense = {
//   type: 'business',
//   amount: '$45 USC'
// }

// const {type, amount} = expense;
// console.log(fileSummary(savedFiled, {color: 'red'}));