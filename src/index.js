function abc(){
  [
    {name: 'Lingonberry jam', price: 4.00},
    {name: 'Mushroom and bean casserole', price: 5.50},
    {name: 'Chili-flavoured wheat', price: 3.00},
    {name: 'Vegetarian soup', price: 4.80},
    {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00}
  ]
}
var arr = [{x:1},{x:2},{x:4}];

arr.reduce(function (a, b) {
  return {x: a.x + b.x}; // returns object with property x
})

// ES6
arr.reduce((a, b) => ({x: a.x + b.x}));

// -> {x: 7}
var arr = [{x:1}, {x:2}, {x:4}];
arr.reduce(function (acc, obj) { return acc + obj.x; }, 0); // 7
console.log(arr);