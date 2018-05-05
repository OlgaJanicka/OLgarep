


function findSmallestInt(array) {

    return array.reduce(function(minimumValue, element) {
        if (minimumValue < element) {
            return minimumValue;// pozostwiamy akumulatot bez zmian, minimumValue to akumulator!!! 
        } else { 
            return element; // podstwawiamy element do akumulatora którym jest minimumValue
        }
    }, Number.MAX_SAFE_INTEGER);// najwieksza wartość jaką zna JS

}

let array = [34, -345, -1, 100];

//let array = [34, 1, 2, 3];
let result = findSmallestInt(array);// funkcja zwróci nam pojedyncz aliczbektór ajest najmniejszawartościaw tab. i przrpisujemmy ją do zmiennej result
console.log(result);




