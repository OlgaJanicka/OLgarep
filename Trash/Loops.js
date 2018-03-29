//0123456789

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function generateNumber(limit, separator = "") {
  var numbers = "";
  
  for (var number = 0; number <= limit; number++) {

    numbers += number + separator;
    if (number % 2=== 0) {
      numbers+=number+separator;
    }
  }
  if (separator.length > 0) {
    numbers = numbers.slice(0, -1);
  }
  return numbers
}
//wykonujemy faktyczny kod
var textLength = 0;
for (let index = 0; index < 6; index++) {
  console.log(generateNumber(textLength , ":"));
  textLength = Math.random() * 10;
  sleep(5000);
}
