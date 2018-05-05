const number = 3;
number = 4;// nie przypisujemy wartości bo to stała

function scopeTest(){
    let test = 3;
    console.log(test);
    if (true){
        let test = 4;
        console.log(test);
    }
    console.log(test);
}
scopeTest();
//console.log(test);