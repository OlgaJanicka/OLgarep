function distinct(array) {
    let cleanArray = [];
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
        let valueToCheck = array[arrayIndex];
        if (cleanArray.indexOf(valueToCheck) == -1) {
            cleanArray.push(valueToCheck);
        }
    }
    return cleanArray;
}

//console.log(distinct([1, 2, 3, 4, 4, 4]));

let dupa = [1, 2, 3, 4, 4, 4].reduce(function (distinct, element) {
    if (distinct.indexOf(element) == -1) {
        distinct.push(element);
    }
    return distinct;
}, [])
console.log(dupa);

/*
let array = [0,1, 2, 3];
let sum = array.reduce(function (sum, element) {
    return sum + element;
})

console.log(sum);
*/
