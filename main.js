// Question: 64
function mergeTextAndNumber(text, num) {
    // Using string interpolation
    var result1 = "".concat(text).concat(num);
    // Using string concatenation
    var result2 = text + num;
    return result1 + "\n" + result2; // Adding a newline for clarity in the output
}
// Example usage:
var mergedText = mergeTextAndNumber("Age: ", 30);
console.log(mergedText);
// Question: 65
function remainder(num1, num2) {
    return num1 % num2;
}
// Example usage:
var results = remainder(5, 2);
console.log(results); // Output: 1
// Question: 66
function checkBothTrue(value1, value2) {
    return value1 && value2;
}
console.log(checkBothTrue(true, false)); // Shows false
