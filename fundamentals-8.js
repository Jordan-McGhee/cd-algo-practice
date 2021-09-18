// GAMING FUN(DAMENTALS)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).   
// Second, create a function playFives(num), which should call rollOne() multiple times –  ‘num' times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
// Third, create a new function named playStatistics(), which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne, among those eight calls.
// Fourth, make a copy of playStatistics and add code to make playStatistics2(), so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.
// Fifth, copy playStatistics2 and add code to it to make playStatistics3(num), so that it will roll as many times as you want, instead of always doing this eight times.
// Finally, make a copy of playStatistics3 and change it to create playStatistics4(num), so that at the end instead of the total sum, it prints the average roll.

function rollOne(){
    roll = Math.trunc(Math.random() * 6 + 1)

    return roll
}

function playFives(num) {
    for (i=1; i<=num; i++) {
        var roll = rollOne()
        console.log(roll)
        if (roll == 5) {
            console.log("That's good luck!")
        }
    }
}

function playStatistics() {
    var low = 6, high = 0
    for (i=1; i<=8; i++) {
        var roll = rollOne()
        if (roll < low) {
            low = roll
        } else if (roll > high) {
            high = roll
        }
    }
    console.log(`The lowest roll was ${low}. The highest roll was ${high}.`)
}

function playStatistics2() {
    var low = 6, high = 0, sum = 0
    for (i=1; i<=8; i++) {
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

// playStatistics2()

function playStatistics3(num) {
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
    let avg = (sum/num)
    console.log(`The lowest roll was ${low}. The highest roll was ${high}. The average of all rolls was ${avg}.`)
}

// playStatistics4(10)


// STATISTICS UNTIL DOUBLES
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls, min, max, and average.

function untilDoubles() {
    let count = max = avg = sum = 0
    let min = 20
    let rolls = []
    let double = false

    while (double == false) {
        var newRoll = Math.trunc(Math.random()*20+1)
        count += 1
        
        if (newRoll < min) {
            min = newRoll
        } else if (newRoll > max) {
            max = newRoll
        }

        if (newRoll == rolls[rolls.length-1]) {
            double = true
        } else {
            rolls.push(newRoll)
        }
    }

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
let x = y = 0

function reset() {
    x = y = 0
}

function moveBy(xOffset, yOffset) {
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
    let distance =  Math.abs(xLocation()) - Math.abs(yLocation())

    return Math.abs(distance)
}

reset()
moveBy(1,-2)
moveBy(3,1)
console.log(xLocation())
console.log(yLocation())

console.log(distanceFromHome())