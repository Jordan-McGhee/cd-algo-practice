array1 = [9,1,4,6,2,3,6,76,23,1]
array2 = [91,123,23,523,12,5]
array3 = [9,8,7,6,5,4,3,2,1]

def combine_sorted_arrays(arr1, arr2):

    # variables to track our current index in each arr, and an empty list to append the sorted values to
    arr1ind = 0
    arr2ind = 0
    mergedArr = []

    # while both indices are less than the lengths of their arrays
    while arr1ind < len(arr1) and arr2ind < len(arr2):

        # if the value of arr1 at arr1index is less than the value of arr2 at arr2index
        if arr1[arr1ind] < arr2[arr2ind]:   

            # append that value to the merged arr
            mergedArr.append(arr1[arr1ind])

            # increment arr1index
            arr1ind += 1

        else:

            # else append the value of arr2 at arr2index to the merged arr
            mergedArr.append(arr2[arr2ind])
            
            # increment arr2index
            arr2ind += 1


    # if we didn't choose the value in arr1, the index would still be less than the length, so we enter this condition
    while arr1ind < len(arr1):

        # append this value to the list
        mergedArr.append(arr1[arr1ind])
        
        # increment arr1index so we don't enter this condition repeatedly
        arr1ind += 1

    # same as above, but for the second arr
    while arr2ind < len(arr2):
        mergedArr.append(arr2[arr2ind])
        arr2ind += 1

    # return the sorted array
    return mergedArr

def mergeSort(arr):

    # this function is recursive and will run until we shrink the list to have a length of 1
    if len(arr) <= 1:
        return arr

    # variable for the middle index of the array
    middleIndex = len(arr)//2

    # divide the array in half using slicing
    leftArr = arr[:middleIndex]
    rightArr = arr[middleIndex:]

    # the recursive part — will continue dividing the array until the top condition is met
    leftSorted = mergeSort(leftArr)
    rightSorted = mergeSort(rightArr)

    # returns a call to the above function, which will continue to sort the arrays
    return combine_sorted_arrays(leftSorted, rightSorted)


print(mergeSort(array1))
print(mergeSort(array2))
print(mergeSort(array3))