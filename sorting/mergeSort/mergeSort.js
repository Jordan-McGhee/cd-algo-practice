array1 = [9,1,4,6,2,3,6,76,23,1]
array2 = [91,123,23,523,12,5]
array3 = [9,8,7,6,5,4,3,2,1]

function combineSortedArrays(arr1,arr2) {

    // have a variable for each of the indices we will use to navigate through the given arrays and the merged arr that we will return at the end. Also create the merged arr

    let arr1ind = 0
    let arr2ind = 0
    let mergedInd = 0
    const mergedArr = []

    // make sure both arrays have items left in them
    while (arr1ind < arr1.length && arr2ind < arr2.length) {

        // if the value in arr1 at the current arr1index is greater than the value in arr2 at the current arr2index
        if (arr1[arr1ind] < arr2[arr2ind]) {

            // we add that value to our merged array at the current merged array index
            mergedArr[mergedInd] = arr1[arr1ind]

            // increment arr1index so we don't add that same value again
            arr1ind++

        // else the value in arr2 at arr2index was bigger,
        } else {

            // so add that to the merged array at the current merged array index
            mergedArr[mergedInd] = arr2[arr2ind]

            // increment arr2index
            arr2ind++
        }

        // after either of the steps above, increment our merged array index so we don't overwrite any values
        mergedInd++
    }

    // this grabs the other value that wasn't taken above, if we appended the value from the second array before the value in the first array
    while (arr1ind < arr1.length) {
        mergedArr[mergedInd] = arr1[arr1ind]

        // increments the merged array index and the index in the first array
        mergedInd++
        arr1ind++
    }

    // same step from above, but this enters if we took the value from the first array
    while (arr2ind < arr2.length) {
        mergedArr[mergedInd] = arr2[arr2ind]

        // increment the merged array index and the index in the second array
        mergedInd++
        arr2ind++
    }

    // return the sorted list at the end
    return mergedArr
}

function mergeSort(arr){

    // since this function is recursive, it will run until we are left with arrays that have a length of 1
    if (arr.length <= 1) {
        return arr
    }

    // we use these variables to divide our arr in half
    const middleIndex = arr.length/2
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex, arr.length)

    // this step breaks down the divided arrays until each arr has a length of 1
    const leftSorted = mergeSort(leftArr)
    const rightSorted = mergeSort(rightArr)

    // return the divided arrays entered into the combined function above
    return combineSortedArrays(leftSorted, rightSorted)
}

console.log(mergeSort(array1))
console.log(mergeSort(array2))
console.log(mergeSort(array3))