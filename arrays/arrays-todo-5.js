// AVERAGE
// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

function avg(arr) {
    // create sum variable to calculate average later
    let sum = 0

    // iterate for every index in arr
    for (i=0; i<arr.length; i++){

        // add arr at index to our sum
        sum += arr[i]
    }

    // return sum divided by the length of the array giving us our average
    return sum/(arr.length)
}

var array = [2,4,6,8]
// console.log(avg(array))


// BALANCE POINT
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

function balancePoint(arr) {
    
    // created a quick function to give us the sum of the values in an array. Need the start and end indices
    function sum(start, end) {
        // has total variable to add to
        let total = 0

        // iterates from our start to our end point
        for (i = start; i <= end; i++) {
            // add arr at each index(i) to our total
            total += arr[i]
        }

        // return total to use in our for loop below
        return total
    }

    // iterate over every index in our arr
    for (j=0; j < arr.length; j++) {
        // at each index(j), check to see if the sum from the 0th index to our current index is equal to the sum of the next index(j+1) to the end of the array. If so, break the loop and return true
        if (sum(0, j) == sum(j+1, arr.length-1)) {
            return true
        }
    }

    // if we get through the entire iteration, return false
    return false
}

// console.log(balancePoint([1,2,3,4,10])) // true
// console.log(balancePoint([1,2,4,2,1])) // false
// console.log(balancePoint([5,6,7,9,9])) // true
// console.log(balancePoint([21,1,2,3,4])) // false



// BALANCE INDEX
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

function balanceIndex(arr) {

    // similar function to above, only difference is in for loop below
    function sum(start, end) {
        let total = 0
        for (i = start; i <= end; i++) {
            total += arr[i]
        }
        return total
    }

    for (j=0; j < arr.length; j++) {

        // instead of checking for the sum of the 0th index to our current index, we do the sum of the 0th index to the index before our current index (j-1) and compare that with the sum of the next index (j+1) to the end of the array
        if (sum(0, j-1) == sum(j+1, arr.length-1)) {

            // if so, break the loop and return our current index
            return j
        }
    }

    // if not, return -1
    return -1
}

console.log(balanceIndex([-2,5,6,0,3])) // true > 2
console.log(balanceIndex([9,9])) // false
console.log(balanceIndex([1,2,3,4,3,2,1])) // true > 3
console.log(balanceIndex([81,20,12,31,21])) // false
console.log(balanceIndex([99,100,21,98,101])) // true > 2