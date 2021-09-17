// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).

function threesFives(){
    let sum = 0
    // let string = ""
    for (i=100; i <= 4000000; i++) {
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

// console.log(threesFives())

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
    let total = cents
    var change = {
        "quarters" : 0,
        "dimes" : 0,
        "nickels" : 0,
        "pennies" : 0
    }

    console.log(`Total at start: ${total}`)

    change["quarters"] = Math.floor(total / 25)
    total -= 25*change["quarters"]

    console.log(change['quarters'])
    console.log(`After quarters: ${total}`)

    change["dimes"] = Math.floor(total / 10)
    total -= 10*change["dimes"]

    console.log(`After dimes: ${total}`)

    change["nickels"] = Math.floor(total / 5)
    total -= 5*change["nickels"]

    console.log(`After nickels: ${total}`)

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
    let sum = 0
    for (i=0; i<=num; i++) {
        if (i == num/3) {
            return -1
        } else if (i % 3 == 0) {
            continue
        } else if (i % 7 == 0) {
            sum += (i*2)
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
    if (num == 1) {
        return 1
    } else if (num == 0) {
        return 0
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
    let sumLength = num.toString().length

    let sum = 0
    for (i=0; i < num.toString().length; i++) {
        // console.log(num.toString()[i])
        sum += Number(num.toString()[i])
    }
    console.log(`Sum: ${sum}`)
    sumLength = sum.toString().length
    console.log(`Length of Sum: ${sumLength}`)
    
    if (sumLength == 1) {
        return sum
    } else {
        return sumToOne(sum)
    }
}

// console.log(sumToOne(928))

function isPrime(num) {
    for (i=2; i < Math.floor(num/2)+1; i++) {
        if (num % i != 0) {
            continue
        } else {
        return false
        }
    }
    return true
}

for (let n=2; n<37; n++) {
    console.log(`Num: ${n}, isPrime: ${isPrime(n)}`)
}