//return 
//return boolean

//1.create a function called 'reject'
//2.if the function returns 'true'
//3.the item should not be included in the new array

function reject(array, iteratorFunction) {
  return array.filter(function(num) {
    return !iteratorFunction(num);
  })
}

const numbers = [10, 20, 30];
const lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

console.log(lessThanFifteen);