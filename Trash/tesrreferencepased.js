function test(value){
    value = {
        value:999
    }
   // value.value +=2;
    console.log(value.value);
}

var testValue ={
    value:3
}
test(testValue);
console.log(testValue.value);