arr1 = [9,1,4,6,2,3,6,76,23,1]
arr2 = [91,123,23,523,12,5]
arr3 = [9,8,7,6,5,4,3,2,1]

function selectionSort(arr) {
    // iterate over the array
    for (i=0; i < arr.length; i++) {

        // have variable for smallest index, default at current index in our foor loop
        let smallestIndex = i

        // iterate over the rest of the arr, from the next index to the end
        for (j=i+1; j < arr.length; j++) {

            // if the value at index j is smaller than the value at index of our current smallest index
            if (arr[j] < arr[smallestIndex]) {

                // update the index stored in smallestIndex to the index at j
                smallestIndex = j
            }
        }

        // swap the values of the value at the index of our smallest value and the index in our current iteration of i. This moves the smallest values to the front of the list
        const temp = arr[smallestIndex]
        arr[smallestIndex] = arr[i]
        arr[i] = temp
    }

    // return the sorted arr
    return arr
}

console.log(selectionSort(arr1))
console.log(selectionSort(arr2))
console.log(selectionSort(arr3))