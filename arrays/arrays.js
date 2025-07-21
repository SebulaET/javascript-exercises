// Take in an array.
// For every even number, triple it.
// Sum all of the even numbers.

// (map) "pass another function as an argument to my function"
    // have function
        //  function code

    // declare variable containing an array
    // declare new variable conatining array applying map function with original function passed through
        // (console log test)

//  (filter) "returns a new array where each item is only included if the callback function returns true for it"
    // have function
        // function code

    // declare variable containing an array
    // declare new variable containing array applying filter function passing through original function
        // (console log test)

// (reduce) "go through every element in arr and apply the callback function to it. It updates total without actually changing the array itself. After it’s done, it returns total.go through every element in arr and apply the callback function to it. It updates total without actually changing the array itself. After it’s done, it returns total."
    // have function
        // function code

    // declare variable containing an array
    // declare new variable containing array with reduce function applied passing through original function
        // (console log test)


// ---------------------------------------------
// my attempt:
function isEven(num){
    return num % 2 == 0;
}

function tripled(num){
    return num * 3;
}

function sum(current, next){
    return current + next;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(isEven);
const tripledNumbers = evenNumbers.map(tripled);

function sumOfTripledEvens(){
    return tripledNumbers.reduce(sum);
}
// ---------------------------------------------
// simplified on TOP:
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}
// ---------------------------------------------



// example:
// ---------------------------------------------mine
function sum(current, next){
    return current + next;
}

return tripledNumbers.reduce(sum);
// ---------------------------------------------
// ==
// ---------------------------------------------TOP
function sumOfTripledEvens(array) {
  return array
    // .filter((num) => num % 2 === 0)
    // .map((num) => num * 3)
    .reduce((current, next) => current + next);
}
// ---------------------------------------------