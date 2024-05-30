// Question: 64

function mergeTextAndNumber(text: string, num: number): string {
    // Using string interpolation
    const result1 = `${text}${num}`;
    
    // Using string concatenation
    const result2 = text + num;

    return result1 + "\n"  + result2; // Adding a newline for clarity in the output
}

// Example usage:
const mergedText = mergeTextAndNumber("Age: ", 30);
console.log(mergedText);

// Question: 65

function remainder(num1: number, num2: number): number {
    return num1 % num2;
}

// Example usage:
const results = remainder(5, 2);
console.log(results); // Output: 1

// Question: 66

function checkBothTrue(value1: boolean, value2: boolean): boolean {

    return value1 && value2
}
console.log(checkBothTrue(true, false)); // Shows false
