var arrayX = [1,2,3,4,5,6,7,8,9,10];
var arrayY = [1,2,3,4,5,6,7,8,9,10];
var multi = 0;

for (let i = 0; i < arrayX.length -1; i++) {
    for (let j = 0; j < arrayY.length -1; j++){
        multi = arrayX * arrayY;
console.log (multi);
    }
}