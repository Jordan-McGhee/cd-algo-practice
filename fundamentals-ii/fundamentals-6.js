// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).

function threesFives(){
    // initial variables, had string for testing
    let sum = 0
    // let string = ""

    // iterate over range given in problem
    for (i=100; i <= 4000000; i++) {

        // first check to make sure i isn't divisible by both 3 and 5
        if (i%3==0 && i%5 == 0) {
            // if it is, continue
            continue

        // else if it's only divisible by 3 and not 5
        } else if (i % 3 == 0) {

            // add i to sum
            sum += i
            // string += i.toString() + ", "

        // else if it's divisible by 5 and not 3
        } else if (i % 5 == 0) {

            // add i to sum
            sum += i
            // string += i.toString() + ", "
        }
    }

    // console.log(string)

    // return sum
    return sum
}

// console.log(threesFives())

// same thing, just added ability to choose a start and end range. Changed these values in the for loop
function betterThreesFives(start, end) {
    let sum = 0
    // let string = ""
    for (i=start; i <= end; i++) {
        if (i%3==0 && i%5 == 0) {
            continue
        } else if (i % 3 == 0) {
            sum += i
            // string += i.toString() + ", "
        } else if (i % 5 == 0) {
            sum += i
            // string += i.toString() + ", "
        }
    }

    // console.log(string)
    return sum
}

// console.log(betterThreesFives(15,30))



// GENERATE COIN CHANGE
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with the smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

// Example output, given (94):

// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4

function generateCoinChange(cents) {

    // initial variables, set total = to cents so we could change it. Not sure if that's necessary, but just in case
    // created an object to store values for the different coins
    let total = cents
    var change = {
        "quarters" : 0,
        "dimes" : 0,
        "nickels" : 0,
        "pennies" : 0
    }

    // console logs for trouble shooting
    console.log(`Total at start: ${total}`)

    // start with quarters. Set our value for our quarter key to total divided by 25. This gives us the amount of quarters in our change
    change["quarters"] = Math.floor(total / 25)

    // subtract the number of quarters * 25 to get our updated total
    total -= 25*change["quarters"]

    console.log(change['quarters'])
    console.log(`After quarters: ${total}`)

    // same step from before, but with 10 instead of 25 for dimes
    change["dimes"] = Math.floor(total / 10)
    total -= 10*change["dimes"]

    console.log(`After dimes: ${total}`)

    // now for nickels
    change["nickels"] = Math.floor(total / 5)
    total -= 5*change["nickels"]

    console.log(`After nickels: ${total}`)

    // the left over total is our value for our pennies key
    change["pennies"] = total

    return change
}

// console.log(generateCoinChange(94))


// MESSY MATH MASHUP
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:
// If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
// Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

function messyMath(num) {
    
    // initial variable for sum set to 0
    let sum = 0

    // iterate from 0 to num
    for (i=0; i<=num; i++) {

        // first if statement is to check if i is equal to 1/3rd of num. If so, break the loop immediately and return -1
        if (i == num/3) {
            return -1

        // next we check if i is divisible evenly by 3, continue if so
        } else if (i % 3 == 0) {
            continue

        // lastly, we check if i is divisible evenly by 7. if so, add i * 2 to sum
        } else if (i % 7 == 0) {
            sum += (i*2)

        // if no conditions are met, just add i to sum
        } else {
            sum += i
        }
    }

    return sum
}

// console.log(messyMath(4))
// console.log(messyMath(8))
// console.log(messyMath(15))


// TWELVE BAR BLUES
// Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

function twelveBar() {
    // iterate 12 times and have the different console logs
    for (i = 1; i <= 12; i++) {
        console.log(i)
        console.log("chick")
        console.log("boom")
        console.log("chick")
    }
}

// console.log(twelveBar())


// FIBONACCI
// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). 

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

function fibonacci(num) {
    // recursive answer here. If num is = 1, just return 1 which was given
    if (num == 1) {
        return 1
    
    // 0 was given as well
    } else if (num == 0) {
        return 0

    // no other numbers were given, so we have to run the function over and over until we get the answer. Fibonnaci is the sum of the previous 2 numbers, so we return fibonnaci of the num before our given number + the fibonnaci of the num two before our given number. This runs until it gets the correct answer
    } else {
        return fibonacci(num-1) + fibonacci(num-2)
    }
}

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))



// SUM TO ONE DIGIT
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. 

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) {
    // use some built ins to check the length of our sum variable. We start out setting it to the length of the given number - get the length by converting it to a string first
    let sumLength = num.toString().length
    let sum = 0

    // iterate from 0, first index of our string that we got from num, to the last index
    for (i=0; i < num.toString().length; i++) {
        // console.log(num.toString()[i])
        
        // add the number value from the current index of our num converted to a string
        sum += Number(num.toString()[i])
    }
    // console logs to make sure it's working correctly
    console.log(`Sum: ${sum}`)
    // set sumLength to the length of the string version of our new sum after our for loop
    sumLength = sum.toString().length
    console.log(`Length of Sum: ${sumLength}`)
    
    // check what the length of our sum is. If it's 1, return sum now. If it's not, run the function again. Yay recursion
    if (sumLength == 1) {
        return sum
    } else {
        return sumToOne(sum)
    }
}

// console.log(sumToOne(928))

function isPrime(num) {
    // kinda brute force, but start from 2 and iterate up to halfway of our num variable. Don't need to go all the way because any numbers greater than half wouldn't be divisible into our num
    for (i=2; i < Math.floor(num/2)+1; i++) {
        // make sure that our current i is not divisible evenly into our num
        if (num % i != 0) {
            continue
        
        // if it is, return false because this number is not prime
        } else {
        return false
        }
    }

    // if our else is never entered, return true. It's prime
    return true
}

// for loop to check multiple numbers quicker
for (let n=2; n<37; n++) {
    console.log(`Num: ${n}, isPrime: ${isPrime(n)}`)
}