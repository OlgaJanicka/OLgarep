class XmassTree {
    constructor(treeHeight) {
        this.treeHeight = treeHeight;
        this.levelStart = this.treeHeight - 1;
        this.indentTreeEvery = 6;


        this.addStars = function addStars(row, levelIndexBuffer) {

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

        this.isIndentatioNeeded = function isIndentatioNeeded(levelNumber, breakTreeNumber) {
            return levelNumber % breakTreeNumber === 0
        }

        this.addWhiteSpaceOnTheLeft = function addWhiteSpaceOnTheLeft(levelStart, row) {
            for (var columnIndex = 0; columnIndex < levelStart; columnIndex++) {
                row += " ";
            }
            return row;
        }
    }



    printTree() {
        var row = "";
        var levelIndexBuffer = 1;
        for (var levelIndex = 1; levelIndex <= this.treeHeight; levelIndex++) {

            if (this.isIndentatioNeeded(levelIndex, this.indentTreeEvery)) {
                this.levelStart += 3;
                levelIndexBuffer -= 3;
            }

            row = this.addWhiteSpaceOnTheLeft(this.levelStart, row);

            row = this.addStars(row, levelIndexBuffer);

            console.log(row);
            this.levelStart--;
            row = "";
            levelIndexBuffer++;
        }
    }

    makeSound() {
        console.log("szsz");
    }
}
module.exports= XmassTree;
