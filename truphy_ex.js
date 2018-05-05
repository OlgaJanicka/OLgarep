console.log(1 == "1");
console.log(1 === "1");



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    while ("") {
        await sleep(1000);
        console.log(Date.now())
    }
}
main();