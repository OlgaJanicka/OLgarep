let array = [0,1, 2, 3];
let result = array.reduce(function (sum, element) {// wywołanie funkcji reduce
return sum + element;
},10)



console.log(result);