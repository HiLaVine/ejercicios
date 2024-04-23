let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let test = 10;
let test1 = {};
let test2 = "Emmanuel";
let test3 = [];
let test4 = null;

console.log(typeof(test4));

let isArray = (typeof(test1) === 'object') && (test1!=null) && (test1.length) != null ? "is array" : "isn't an array";



console.log(Array.isArray(test3));