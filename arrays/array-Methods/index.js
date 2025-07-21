// Create a function that translates dash separated words into camel case.
    // 1 Take strings and separate into words in an array
        // Check for things that need to be modified
    // 2 Modify words
        // Change letters into capital if they are after the first word in the array
    // 3 Combine new strings
        // Put the strings in the array back into one item
// (Use 'Split' and 'join')

function camelize(string){
    string = string.split("-");
    console.log(string);
}

const tbd= "to-be-determined";

camelize(tbd);