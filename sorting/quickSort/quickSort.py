array1 = [9,1,4,6,2,3,6,76,23,1]
array2 = [91,123,23,523,12,5]
array3 = [9,8,7,6,5,4,3,2,1]

def partition(arr, start, end):

    # variable for our pivot to compare other values to inside the array
    pivot = arr[end]

    # indices to move throughout the list from start to end, end to start
    leftIndex = start
    rightIndex = end-1

    # while loop to make sure our indices don't cross
    while leftIndex <= rightIndex:

        # makes sure that our left index doesn't move out of range and that each value we pass is less than our pivot value
        while leftIndex <= end and arr[leftIndex] < pivot:
            
            # increments if those conditions are met
            leftIndex += 1

        # makes sure that our right index doesn't move out of range and that each value we pass is greater than/equal to our pivot value
        while rightIndex >= start and arr[rightIndex] >= pivot:

            # increments if those conditions are met
            rightIndex -= 1

        # if we still have values to consider, that means we've got values at indices that need to be swapped
        if leftIndex < rightIndex:
            arr[leftIndex], arr[rightIndex] = arr[rightIndex], arr[leftIndex]

        # else we need to move the pivot into the correct spot by swapping it with where our left index ended
        else:
            arr[leftIndex], arr[end] = arr[end], arr[leftIndex]

    return leftIndex

def quickSortSubArr(arr, start, end):
    
    # recursive function, so if we have a list of length 0 or 1, return without partitioning further
    if start >= end:
        return

    # divide the array into subarrays with the above function
    pivotIndex = partition(arr, start, end)

    # recursively sort each sublist 
    quickSortSubArr(arr, start, pivotIndex-1)
    quickSortSubArr(arr, pivotIndex+1, end)

def quickSort(arr):
    quickSortSubArr(arr, 0, len(arr)-1)

    return arr


print(quickSort(array1))
print(quickSort(array2))
print(quickSort(array3))