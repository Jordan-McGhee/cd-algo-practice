// SIGMA
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).

function sigma(num) {
    // create initial variables
    let total=0, i;

    // iterate from 1 up to num
    for (i=1; i <= num; i++) {
        // increment total for each num
        total += i
    }

    // return total
    return total
}

// console.log(sigma(3))
// console.log(sigma(4))
// console.log(sigma(5))

// FACTORIAL
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). 
// For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).

function factorial(num){
    // create initial variables
    let total=1, i;

    // iterate up to num
    for (i=1; i <= num; i++) {
        // multiply total by the current number
        total *= i
    }

    // return total
    return total
}

// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))


// STAR ART
// Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ('*'), sometimes called stars. You should print the given number of asterisks consecutively. Depending on which function is called, those stars should be left-justified (the first star would be very first char in the text field), or right-justified (the last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75- character text field (with the same number of spaces on either side of the block of stars, plus/minus one).
// Write a function drawLeftStars(num) that accepts a number and prints that many asterisks.
// Write a function drawRightStars(num) that prints 75 characters total. Stars should build from the right side. The last num characters should be asterisks; the other 75 should be spaces.   
// Write function drawCenteredStars(num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks; the rest of the 75 spaces.

function drawLeftStars(num) {
    // create initial variables, limit of 75 as the constraint. Empty string to append stars or spaces to
    let limit = 75, string = ""

    // increment up to num, this will be the number of stars since we want to start off filling them in first
    for (i=1; i <= num; i ++) {
        // append a star to the string for each num
        string += "*"
    }

    // increment from num+1 up to our limit of 75. Stars will fill up the first spaces in the string, so we don't start from 1
    for (i=num+1; i<=limit; i++) {
        // append a space for each num
        string += "-"
    }

    // return string
    return string
}

console.log(drawLeftStars(70))

function drawRightStars(num) {
    // initial variables, new one this time to see where spaces will end
    let limit = 75, string = "", spaces = 75-num

    // iterate from 1 up to our spaces variable
    for (i=1; i <= spaces; i ++) {
        // append a space for each i
        string += "-"
    }

    // iterate from spaces + 1 up to our limit
    for (i=spaces+1; i<=limit; i++) {
        // append a star for each
        string += "*"
    }

    // return string
    return string
}

console.log(drawRightStars(70))

function drawCenteredStars(num) {
    // initial variables, for cutOff, we take limit - num and divide by 2. This will give us the first number we count up to for our spaces. Divide by two because we need to account for this number of spaces at the end of the string as well. Math.floor to account for decimals if we divide 75 by an even number
    let limit = 75; string = "", cutOff = Math.floor((limit-num)/2);

    // iterate up to the cutoff for first spaces
    for (i=1; i<=cutOff; i++) {
        // append space for each
        string += "-"
    }

    // iterate from cutOff +1 to our limit - cutoff. This will leave room for the spaces at the end
    for (i=cutOff+1; i<=(limit-cutOff); i++) {
        // append star for each
        string += "*"
    }

    // iterate from our last spot + 1 to our upper limit
    for (i=(limit-cutOff+1); i<=limit; i++) {
        // append space for each
        string += "-"
    }

    // console log to double check :)
    console.log(string.length)

    // return string
    return string
}

console.log(drawCenteredStars(45))




// CHARACTER ART
// From the above, derive the following that accepts and draws the given characters, not just asterisks:
// drawLeftChars(num,char)
// drawRightChars(num,char)
// drawCenteredChars(num,char)
// For all three of these, you can safely assume that 'char'is a string with the length of 1.

// same comments as previous problem. Just replaced stars with char

function drawLeftChars(num, char) {
    let limit = 75; string = ""

    for (i=1; i <= num; i++) {
        string += char
    }

    for (i = num+1; i <= limit; i++) {
        string += "-"
    }

    return string
}

console.log(drawLeftChars(70, "$"))

function drawRightChars(num, char) {
    let limit = 75, string = ""

    for (i=1; i <= limit - num; i++) {
        string += "-"
    }

    for (i=limit-num+1; i <= limit; i++) {
        string += char
    }

    return string
}

console.log(drawRightChars(70, "$"))

function drawCenteredChars(num, char) {
    
    let limit = 75; string = "", cutOff = Math.floor((limit-num)/2);

    
    for (i=1; i<=cutOff; i++) {
        string += "-"
    }

    
    for (i=cutOff+1; i<=(limit-cutOff); i++) {
        string += char
    }

    for (i=(limit-cutOff+1); i<=limit; i++) {
        string += "-"
    }

    console.log(string.length)

    return string
}

console.log(drawCenteredChars(45, "$"))