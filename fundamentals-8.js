// GAMING FUN(DAMENTALS)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).   
// Second, create a function playFives(num), which should call rollOne() multiple times –  ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
// Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.
// Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.
// Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.
// Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.

function rollOne(){
    // Use math.random to get dice roll. Multiply by 6, then plus 1 to get numbers between 1&6. Trunc to get a simplified number
    roll = Math.trunc(Math.random() * 6 + 1)

    // return roll to use in later functions
    return roll
}

function playFives(num) {
    // iterate num number of times
    for (i=1; i<=num; i++) {
        // establish variable to track each roll
        var roll = rollOne()
        console.log(roll)

        // check to see if our condition is met
        if (roll == 5) {
            console.log("That's good luck!")
        }
    }
}

function playStatistics() {
    // establish variables to track low and high values
    var low = 6, high = 0
    
    // iterate 8 times
    for (i=1; i<=8; i++) {
        // variable to track each roll
        var roll = rollOne()

        // check if our roll variable is less than our current low or high. Update those variables if so
        if (roll < low) {
            low = roll
        } else if (roll > high) {
            high = roll
        }
    }

    // console logs what our values ended as
    console.log(`The lowest roll was ${low}. The highest roll was ${high}.`)
}

function playStatistics2() {

    // establish values to change throughout function, only difference is we're tracking sum now
    var low = 6, high = 0, sum = 0

    for (i=1; i<=8; i++) {

        var roll = rollOne()
        if (roll < low) {
            low = roll
        } else if (roll > high) {
            high = roll
        }

        // add the value of roll to our sum variable
        sum += roll
    }
    console.log(`The lowest roll was ${low}. The highest roll was ${high}. The sum of all rolls was ${sum}.`)
}

// playStatistics2()

function playStatistics3(num) {

    // same function. Just changed our iteration count from 8 to whatever the given num value is
    var low = 6, high = 0, sum = 0
    for (i=1; i<=num; i++) {
        var roll = rollOne()
        if (roll < low) {
            low = roll
        } else if (roll > high) {
            high = roll
        }
        sum += roll
    }
    console.log(`The lowest roll was ${low}. The highest roll was ${high}. The sum of all rolls was ${sum}.`)
}

// playStatistics3(100)

function playStatistics4(num) {

    // same as above
    var low = 6, high = 0, sum = 0
    for (i=1; i<=num; i++) {
        var roll = rollOne()
        if (roll < low) {
            low = roll
        } else if (roll > high) {
            high = roll
        }
        sum += roll
    }

    // create average variable which is our sum divided by number of rolls
    let avg = (sum/num)
    console.log(`The lowest roll was ${low}. The highest roll was ${high}. The average of all rolls was ${avg}.`)
}

// playStatistics4(10)


// STATISTICS UNTIL DOUBLES
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function untilDoubles() {
    // set our initial variables to 0, except min. Min is a higher number than 0 so it will change if the roll is lower than our initial value
    let count = max = avg = sum = 0
    let min = 20

    // empty list to append rolls to
    let rolls = []
    // double to false for our while loop. While there isn't a double, our loop will continue to run
    let double = false

    while (double == false) {
        // temporary variable to keep track of our roll
        var newRoll = Math.trunc(Math.random()*20+1)

        // increment our roll count
        count += 1
        
        // check to see if we need to change our min or max values
        if (newRoll < min) {
            min = newRoll
        } else if (newRoll > max) {
            max = newRoll
        }

        // see if our newest roll is equal to the last roll (the last index of our rolls array)
        if (newRoll == rolls[rolls.length-1]) {

            // if so, set double equal to true so our loop stops
            double = true
        } else {

            // else, append value to our list and run loop again
            rolls.push(newRoll)
        }
    }

    // get our sum by iterating over array and adding each value to our sum. Need this for our average variable
    for (i=0;i<rolls.length; i++) {
        sum += rolls[i]
    }
    avg = sum/count
    console.log(`Number of rolls: ${count}, Min: ${min}, Max: ${max}, Average: ${avg}`)
}

// untilDoubles()


// CLAIRE IS WHERE?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions (reset, moveBy, xLocation and yLocation) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0). The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation()return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1,-2), and moveBy(3,1), subsequently calling xLocation() and yLocation() should return 4 and -1.

// Second: create distFromHome(). Assuming she moves diagonally, return her distance from home.

// global variables to change
let x = y = 0

function reset() {
    // these set our global variables back to 0
    x = y = 0
}

function moveBy(xOffset, yOffset) {
    // changes our x and y values to whatever numbers are entered
    x += xOffset
    y += yOffset

    return [x, y]
}

function xLocation(){
    return x
}

function yLocation() {
    return y
}

function distanceFromHome(){
    // Since Claire can move diagonally, we need the difference between X & Y. Subtract the absolute value of y from x
    let distance =  Math.abs(xLocation()) - Math.abs(yLocation())

    // return the absolute value of above, so we have a positive number
    return Math.abs(distance)
}

reset()
moveBy(1,-2)
moveBy(3,1)
console.log(xLocation())
console.log(yLocation())

console.log(distanceFromHome())