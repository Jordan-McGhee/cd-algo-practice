arr1 = [9,1,4,6,2,3,6,76,23,1]
arr2 = [91,123,23,523,12,5]
arr3 = [9,8,7,6,5,4,3,2,1]

def selectionSort(arr):

    # iterate over indices in arr
    for i in range(len(arr)):

        # variable to store index of smallest value in arr
        smallest_index = i

        # iterate over all indices after current index(i)
        for j in range(i+1, len(arr)):

            # if the value at index j is less than the value at the index stored in the smallest_index variable
            if arr[j] < arr[smallest_index]:

                # updated smallest_index to store the index j
                smallest_index = j

        # swap the values at the current index (i) & the value at the smallest_indexx
        arr[i], arr[smallest_index] = arr[smallest_index], arr[i]

    # return arr
    return arr

print(selectionSort(arr1))
print(selectionSort(arr2))
print(selectionSort(arr3))