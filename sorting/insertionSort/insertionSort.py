arr1 = [9,1,4,6,2,3,6,76,23,1]
arr2 = [91,123,23,523,12,5]
arr3 = [9,8,7,6,5,4,3,2,1]

def insertionSort(arr):

    for i in range(len(arr)):
        index = i

        while index > 0 and arr[index-1] >= arr[index]:
            arr[index-1], arr[index] = arr[index], arr[index-1]
            index -= 1

    return arr

print(insertionSort(arr1))
print(insertionSort(arr2))
print(insertionSort(arr3))