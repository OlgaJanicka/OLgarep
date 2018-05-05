let olga = (n)=>{
    let array = [];
    for (let number = 0; number<=n; number ++){
        if (number % 2 == 0)  {
            array.push(number);
        }   
    }
    return array;
}


olga(20).forEach(element => {
    console.log(element);   
});


