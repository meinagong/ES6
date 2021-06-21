const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// function validateShoppingList(...items) {
//   if(items.indexOf('milk') < 0) {
//     return ['milk', ...items];
//   }
//   return items;
// }


// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];


// const addSum = function(...numbers) {
//   return numbers.reduce((sum, number) => {
//     return sum + number;
//   }, 0);
// }
