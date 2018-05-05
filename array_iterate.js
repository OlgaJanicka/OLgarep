let print = function (number) {
    console.log(number);
}

let example = [2, 4, 5, 6, 7, "olga"];

for (let index = 0; index < example.length; index++) {
    const element = example[index];
    //console.log(element);
    print(element);
}

console.log("other method");
//example.forEach(print);

example.forEach(function (show) { console.log(show) });

function forEach(array, functionToRun) {
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        functionToRun(element);

    }
}
console.log("nasz forEach");

let naszaFunkcja = function (element) {
    element = element*2;
    console.log(element)
}

forEach(example,naszaFunkcja);