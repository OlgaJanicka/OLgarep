let print = function (item) {
    console.log(item);
}



let array = [1, 2, 3, 4, 5];

console.log("using annonymos function");
array.forEach(function (item) {
    console.log(item);
});

console.log("using arrow function");
array.forEach(element => {
    console.log(element);
});

console.log("using print function");

array.forEach(print); 
