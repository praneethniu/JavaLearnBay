const merge = (first, second) => {
  let i = 0
  let j = 0
  let k = 0
  const temp = []
  while (i < first.length && j < second.length) {
    if (first[i] > second[j]) {
      temp[k] = second[j]
      j++
      k++
    } else {
      temp[k] = first[i]
      i++
      k++
    }
  }

  while (i < first.length) {
    temp[k] = first[i]
    i++
    k++
  }
  while (j < second.length) {
    temp[k] = second[j]
    j++
    k++
  }
  return temp
}
const mergeSort = (arr) => {
  const splitArray = (arr, start, end) => {
    if (start == end) {
      return
    }
    if (start < end) {
      const mid = Math.floor((start + end) / 2) + 1
      const first = splitArray(arr, start, mid - 1)
      const second = splitArray(arr, mid, end)
      const mergedArray = merge(first, second)
      return mergedArray
    }
  }

  return splitArray(arr, 0, arr.length - 1)
}

const x = [12, 34, 5, 78, 9, 9, 1, 2, 74]

console.log(mergeSort(x))
