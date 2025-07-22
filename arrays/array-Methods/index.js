// // Lesson 1:

// // Create a function that translates dash separated words into camel case.
//     // 1 Take strings and separate into words in an array
//         // Check for things that need to be modified
//     // 2 Modify words
//         // Change letters into capital if they are after the first word in the array
//     // 3 Combine new strings
//         // Put the strings in the array back into one item
// // (Use 'Split' and 'join')

// function camelize(string){
//     return string
//     .split("-")
//     .map((word, index) => {
//         if (index === 0) {
//             return word
//         }
//         else {
//             return (word.charAt(0).toUpperCase() + word.slice(1));
//         }
//     })
//     .join("");
// }
// // const tbd = "to-be-determined"
// //  console.log(camelize(tbd));

// // Arrow Functions:

// // Traditional function
// function add(a, b) {
//     return a + b;
// }

// // Arrow function equivalent
// const addArrow = (a, b) => (a + b);

// // console.log(add(2, 3)); // Output: 5
// // console.log(addArrow(2, 3)); // Output: 5

// // Lesson 2:

// // Find values between two integers in an array and sort into a new array.
//     // determine which values match
//     // plug in new numbers in array

// function filterRange (arr, a, b){
//     return arr.filter(item =>(item >= a && item <= b))
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered );

// alert( arr );
// // -------------------------------------------------------------------------
//     // For the .filter method you can create the callback function in itself.
//     // for example:
// // you can do it this way where there is an existing function to call back:
// // function isOdd(num) {
// //   return num % 2 !== 0;
// // }
// // const arr = [1, 2, 3, 4, 5];
// // const oddNums = arr.filter(isOdd);
// // Or you can do it this way where you make an arrow function in the callback space:
// // function filterRange (arr, a, b){
// //     return arr.filter(item =>(item >= a && item <= b))
// // }
// // let arr = [5, 3, 8, 1];
// // let filtered = filterRange(arr, 1, 4);

// // Lesson 3

// // Write a function that gets an array and removes all values not between a and b.
//     // takes input of array, a, and b
//     // filters out items less than a and more than b
//     // returns new array

// function filterRangeInPlace(arr, a, b){
//     for (let i=0; i < arr.length; i++){
//         let val = arr[i];

//         if (val < a || val > b){
//             arr.splice(i,1)
//             // splicing at i's value and deleting one item
//             // splice modifies slice does not [ splice(start, deleteCount, item1, item2, etc.) ]
//         }
//     }
// }

// let arr = [5, 3, 8, 1]
// filterRangeInPlace(arr, 1, 4);
// alert( arr );

// // Lesson 4

// // Take an array and reorganize in descending order
//     // write function that takes array input, currentItem, nextItem
//     // take currentItem check if lower than next item, 
//         // if so place after next item
//         // if not, nextItem becomes currentItem?
//         // cycle until lower than check returns true for all values

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b -a );

// alert( arr );

// lesson 5

// Given an array of strings:
// Return a sorted COPY

// function copySorted(arr){
//     return arr.toSorted((a, b) => b - a)
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );

// Lesson 6
    // SHUFFLE

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"];

shuffle(cards);

console.log(cards);

function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1))

        [arr[i], arr[random] = arr[random], arr[i]];
    }
}