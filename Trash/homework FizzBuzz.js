function preFizz(n) {
    var array = [];
    var nextNumber;
    for (nextNumber = 1; nextNumber <= n; nextNumber++) {
        array.push(nextNumber);
    }
    return array;
}
//preFizz(3);