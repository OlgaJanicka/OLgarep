function addStars(row,levelIndexBuffer) {

    for (var starIndex = 0; starIndex < (2 * levelIndexBuffer) - 1; starIndex++) {
        //row += "*";
        if (starIndex == 0 || starIndex == (2 * levelIndexBuffer) - 2) {
            row += "*";
        } else {
            row += ' ';
        }
    }
    return row;
}

function isIndentatioNeeded(levelNumber, breakTreeNumber) {
    return levelNumber % breakTreeNumber === 0
}

function addWhiteSpaceOnTheLeft(levelStart, row) {
    for (var columnIndex = 0; columnIndex < levelStart; columnIndex++) {
        row += " ";
    }
    return row;
}


function printTree(treeHeight, levelStart, indentTreeEvery, levelIndexBuffer) {
    var row = "";
    for (var levelIndex = 1; levelIndex <= treeHeight; levelIndex++) {

        if (isIndentatioNeeded(levelIndex, indentTreeEvery)) {
            levelStart += 3;
            levelIndexBuffer -= 3;
        }

        row = addWhiteSpaceOnTheLeft(levelStart, row);

        row = addStars(row,levelIndexBuffer);

        console.log(row);
        levelStart--;
        row = "";
        levelIndexBuffer++;
    }
}

printTree(30, 24, 5, 1);



