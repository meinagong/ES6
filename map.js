// returns ['red', 'yellow', 'blue']

const paints = [{color: 'red'}, {color: 'blue'}, {color: 'yellow'}];

function pluck(array, property) {
  let colorArray = [];
  array.map(function(paint) {
    colorArray.push(paint[property]);
  });
  return colorArray;
}

console.log(pluck(paints, 'color'));