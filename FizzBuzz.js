// Return an array
function fizzbuzz(n) {
    var array = [];
    var nextNumber;
    for (nextNumber = 1; nextNumber <= n; nextNumber++) {
        if (nextNumber % 3 == 0 && nextNumber % 5 == 0) {
            array.push("FizzBuzz");
        } else if (nextNumber % 3 == 0) {
            array.push("Fizz");
        } else if (nextNumber % 5 == 0) {
            array.push ("Buzz");
        }else{
            array.push(nextNumber);
        }   
    }
    return array;
}

console.log(fizzbuzz(15));

