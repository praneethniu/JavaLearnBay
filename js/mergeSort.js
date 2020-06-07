const merge = (arr, strt, mid, end) => {
  let i = strt,
    j = mid + 1 // i = 0,  j= 4
  let tempArray = [] // size = 8  {1, 2, 3, 4, 5, 6, 7, 8}
  let k = 0

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      tempArray[k] = arr[i]
      k++
      i++
    } else {
      tempArray[k] = arr[j]
      k++
      j++
    }
  }

  while (i <= mid) {
    tempArray[k] = arr[i]
    k++
    i++
  }

  while (j <= end) {
    tempArray[k] = arr[j]
    k++
    j++
  }

  j = strt
  for (i = 0; i < end - strt + 1; i++) {
    arr[j] = tempArray[i]
    j++
  }
}

const divideArray = (arr, strt, end) => {
  if (strt == end) return
  if (strt < end) {
    let mid = Math.floor((strt + end) / 2)
    divideArray(arr, strt, mid)
    divideArray(arr, mid + 1, end)
    merge(arr, strt, mid, end)
  }
}

const x = [12, 34, 5, 78, 9, 9, 1, 2, 74]
divideArray(x, 0, x.length-1)
console.log(x)
