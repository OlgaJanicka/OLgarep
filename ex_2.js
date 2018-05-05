//stworzyć f , która ma zwrócić tabl. , w tabl. litery, od a do zadanej;

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"];

function array(a, endLetter) {
    let array = [];
    let letterIndex;

    for (letterIndex = 0; letterIndex <= letters.length; letterIndex++) {
        let letter = letters[letterIndex];
        if (letter <= endLetter) {
            array.push(letter);
        }             
    }
return array;
}
console.log(array("a","k"));
//array("a", "e");
