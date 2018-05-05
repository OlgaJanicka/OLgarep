function distinct(array) {
    let cleanArray = [];

    array.forEach(valueToCheck => {
        if (cleanArray.indexOf(valueToCheck) == -1) {
            cleanArray.push(valueToCheck);
        }
    });

    return cleanArray;
}

console.log(distinct([1, 2, 3, 4, 4, 4]));
