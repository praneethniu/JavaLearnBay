const binary = (arr) => {
  let i = 0
  let k = arr.length - 1
  while (i < k) {
      if(arr[i] !== 0){
         i++
      }
      if(arr[k] !== 1){
        k--
     }
    if (arr[i] === 0 &&  arr[k] === 1) {
      let temp = arr[i]
      arr[i] = arr[k]
      arr[k] = temp
      i++
      k--
    } 
  }
  return arr
}

const i = [1, 0, 1, 0, 0, 0, 1]
console.log(binary(i))
