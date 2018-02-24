/*
number of rows=6


     *
    ***
   *****
  *******
 *********
***********

- ustaw wysokośc choinki=6
- przejdz do 0 wiersza
- zrób o 1 mniej  spacji niż wysokość choinki;
- wstaw  2x nr wiersza -1 gwiazdek
- przejdz do kolejnego wiersza
- zrób o 1 mniej  spacji niż w poprzednim wierszu;
- wstaw  2x nr wiersza -1 gwiazdek
- przejdz do kolejnego wiersza
- powtórz poprzednie 3 kroki aż do 
*/

var treeHeight = 6;
var treeLevel = "";
var levelStart = treeHeight - 1;
for (var levelIndex = 1; levelIndex <=  treeHeight; levelIndex++) {

    for (var columnIndex = 0; columnIndex < levelStart; columnIndex++) {
        treeLevel += " ";
    }
    for (var starIndex = 0; starIndex < (2 * levelIndex) - 1; starIndex++) {
        treeLevel += "*";
    }
    //treeLevel += "*";
    console.log(treeLevel);
    levelStart--;
    treeLevel = "";
}
