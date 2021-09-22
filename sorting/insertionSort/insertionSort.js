arr1 = [9,1,4,6,2,3,6,76,23,1]
arr2 = [91,123,23,523,12,5]
arr3 = [9,8,7,6,5,4,3,2,1]

function insertionSort(arr) {

    // iterate over arr
    for (i=0; i < arr.length; i++) {

        // set index variable to current i to start
        let index = i

        // while loop that will shift the value at the current index to the left until it's in the correct spot
        while(index > 0 && arr[index-1] >= arr[index]) {

            // swap value at arr[index] and arr[index-1]
            const temp = arr[index-1]
            arr[index-1] = arr[index]
            arr[index] = temp

            // decrement index to continue pushing it to the left if necessary
            index--
        }
    }

    // return sorted arr
    return arr
}

console.log(insertionSort(arr1))
console.log(insertionSort(arr2))
console.log(insertionSort(arr3))