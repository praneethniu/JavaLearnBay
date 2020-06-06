const pivotIndex = (arr, start = 0, end = arr.length - 1) => {
  //take pivot
  const pivot = arr[start]
  //take index
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      swap(arr, swapIndex, i)
    }
  }

  swap(arr, start, swapIndex)
  return swapIndex
}

const quickSort = (arr) => {
  const merge = (arr, start, end) => {
    if (start >= end) {
      return arr
    }
    let index = pivotIndex(arr, start, end)
    merge(arr, start, index)
    merge(arr, index + 1, end)
  }
  merge(arr, 0, arr.length - 1)
  return arr
}

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])

const x = [12, 34, 5, 78, 9, 1, 2, 74]

console.log(quickSort(x))
