array1 = [9,1,4,6,2,3,6,76,23,1]
array2 = [91,123,23,523,12,5]
array3 = [9,8,7,6,5,4,3,2,1]

function partition(arr, start, end) {

    // start with a pivot variable to compare values in our arr to. To start, with use the last item in the arr
    let pivot = arr[end]

    // indices that will move through the list. Left goes right, right moves left
    let leftIndex = start
    let rightIndex = end-1

    // overarching while loop that makes sure our indices don't pass each other
    while (leftIndex <= rightIndex) {

        // first while loop makes sure that our left index doesn't pass the end of the list, and that value of that index is less than the value stored in our pivot
        while (leftIndex <= end && arr[leftIndex] < pivot) {

            // increments the index if those conditions are met
            leftIndex++
        }

        // this loop makes sure that our right index doesn't go past the start of the list and that the value of that index is greater than/equal to the value stored in our pivot
        while(rightIndex >= start && arr[rightIndex] >= pivot) {

            // decrements the index if those condtions are met
            rightIndex--
        }

        // if we reach these conditions, that means that we need to make a switch
        // if the left index is less than the right index, means there's still sorting to do and we've reached two values that need to be swapped
        if (leftIndex < rightIndex) {

            // use a temp variable to swap the values at those indices
            const temp = arr[leftIndex]
            arr[leftIndex] = arr[rightIndex]
            arr[rightIndex] = temp

        // else we've looked at all the values and are done partitioning.
        // we move the pivot to its correct spot in the list
        } else {
            const temp = arr[leftIndex]
            arr[leftIndex] = arr[end]
            arr[end] = temp
        }
    }

    // returns new pivot index for next step
    return leftIndex
}

function quickSortSubArray(arr, start, end) {

    // recursive function, so this returns if we have a list length of 1
    if (start >= end){
        return
    }

    // divide the array into two arrays
    const pivotIndex = partition(arr, start, end)

    // recurively sort each sub array
    quickSortSubArray(arr, start, pivotIndex-1)
    quickSortSubArray(arr, pivotIndex+1, end)
}

function quickSort(arr) {
    quickSortSubArray(arr, 0, arr.length-1)

    return arr
}


console.log(quickSort(array1))
console.log(quickSort(array2))
console.log(quickSort(array3))