

function iterate(printEvery, limit, onEvery) {
    for (let index = 0; index < limit; index++) {
        if (index % printEvery === 0) {
            if (typeof onEvery != Function) {
                throw "onEvery should be a function";
            }

            if (onEvery) {
                onEvery(index);
            }
        }
    }
}


iterate(4, 456, 8);

iterate(4, 456, (value) => {
    if (value % 10 === 0) {
        console.log(value);
    }
});