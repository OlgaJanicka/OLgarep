// Return an array
function Condition(divider,product){
    this.divider=divider;
    this.product=product;
}

var warunki=[];
warunki.push(new Condition(3,"Fizz"));// egzemplarz/encja klasy Condition
warunki.push(new Condition(5,"Buzz"));



function fizzbuzz(n,conditions) {
    var array = [];
    var nextNumber;
    for (nextNumber = 1; nextNumber <= n; nextNumber++) {
        if (nextNumber % 3 == 0 && nextNumber % 5 == 0) {
            array.push("FizzBuzz");
            }

            conditions.forEach(function(element)  {
                if (nextNumber % element.divider === 0 ) {
                    array.push(element.product);
                }
            });
            /*
        }else{
            array.push(nextNumber);
        }  */ 
    }
    return array;
}

console.log(fizzbuzz(15,warunki));

