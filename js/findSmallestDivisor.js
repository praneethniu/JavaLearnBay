const findSmallestDivisor = (s, t) => {
  const first = s.split("")
  const second = t.split("")
  if (first[0] !== second[0]) {
    return -1
  }

  let i = 0
  let j = 0
  let count = 0
  while (i < first.length) {
    if (first[i] === second[j]) {
      i++
      j++
    } else if (j === second.length) {
      j = 0
      count++
    } else {
      return -1
    }
  }
  if (j !== second.length) {
    return -1
  }
  let x = second[0]
  let k = 1
  let resultCount = 0
  while (k < second.length) {
    if (second[k] !== x) {
      resultCount++
    } else {
        break
    }
    k++
  }
  return resultCount + 1
}

const s = "bcdbcdbcdbcd"
const t = "bcdbcd"
console.log(findSmallestDivisor(s, t))
