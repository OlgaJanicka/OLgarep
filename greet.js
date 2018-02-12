/* Return a greeting string first version
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}
var show = greet("Olga");
console.log(show);




// Return a greeting string second version
function greet(name) {
return "Hello, " + name + " how are you doing today?";
}
console.log(greet("Olga"));
*/

// Return a greeting string second version
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Olga"));

