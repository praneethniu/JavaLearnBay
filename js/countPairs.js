const countPairs = (arr, k) => {
  let count = 0
  arr.sort()

  let l = 0
  let r = 0
  let n = arr.length
  let check = {}
  while (r < n) {
    if (arr[r] - arr[l] === k) {
      if (!(check[arr[r]] && check[arr[r]] === arr[l])) {
        count++
      } else {
        check = {
          ...check,
          [arr[r]]: arr[l],
        }
      }

      l++
      r++
    } else if (arr[r] - arr[l] > k) l++
    else r++
  }
  return count
}

const i = [1,3,1,5,4]
console.log(countPairs(i, 0))
