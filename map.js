let array = [10, 20, 30, 40, 50];
let double = array.map(function (element) {
    if (element === 30) {
        return element.toString();
    } else {
        return element;
    }

})
console.log(double);

//return element.toString();
