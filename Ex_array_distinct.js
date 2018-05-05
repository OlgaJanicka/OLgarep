function distinct(array) {
    let newArray = [];
    for (let ArrayIndex = 0; ArrayIndex < array.length; ArrayIndex++) {
        if (newArray.indexOf(array[ArrayIndex]) === -1) {
            newArray.push(array(ArrayIndex))
        }
    }
}
