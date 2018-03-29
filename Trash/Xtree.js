


function spacja(levelStart) {
    var row = "";
    for (var columnIndex = 0; columnIndex < levelStart; columnIndex++) {
        row += " ";
    }
    return (row);
}

function gwiazdki(levelIndexBuffer) {
    var row = "";

    for (var starIndex = 0; starIndex < (2 * levelIndexBuffer) - 1; starIndex++) {
        //row += "*";
        if (starIndex == 0 || starIndex == (2 * levelIndexBuffer) - 2) {
            row += "*";
        } else {
            row += ' ';
        }
    }
    return (row);
}


var treeHeight = 10;
var row = "";
var levelStart = treeHeight - 1;
var breakTreeEvery = 5;
var levelIndexBuffer = 1;

for (var levelIndex = 1; levelIndex <= treeHeight; levelIndex++) {
    if (levelIndex % breakTreeEvery === 0) {
        levelIndexBuffer -= 2;
        levelStart += 2;
    }

    row = spacja(levelStart) + gwiazdki(levelIndexBuffer) + spacja(levelStart);
    row = row + row + row + row;

    console.log(row);
    //tablica[] =row;
    levelStart--;
    levelIndexBuffer++;
}
