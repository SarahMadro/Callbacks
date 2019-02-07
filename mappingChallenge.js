var input = [{
    x: 3,
    y: 4
  },
  {
    x: 12,
    y: 5
  },
  {
    x: 8,
    y: 15
  }
];
let result = input.map(number =>
  (Math.sqrt((number.x * number.x) + (number.y * number. y)))
);

// var result = input.map(input => Math.sqrt(Math.pow(input.x, 2) + Math.pow(input.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);