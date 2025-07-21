// Create a function that translates dash separated words into camel case.
    // 1 Take strings and separate into words in an array
        // Check for things that need to be modified
    // 2 Modify words
        // Change letters into capital if they are after the first word in the array
    // 3 Combine new strings
        // Put the strings in the array back into one item
// (Use 'Split' and 'join')

function camelize(string){
    return string
    .split("-")
    .map((word, index) => {
        if (index === 0) {
            return word
        }
        else {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }
    })
    .join("");
}
// const tbd = "to-be-determined"
//  console.log(camelize(tbd));

// Arrow Functions:

// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function equivalent
const addArrow = (a, b) => a + b;

// console.log(add(2, 3)); // Output: 5
// console.log(addArrow(2, 3)); // Output: 5