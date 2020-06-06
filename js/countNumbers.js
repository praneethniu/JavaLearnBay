const countNumbers = (nums) => {
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    if (!arr[nums[i]]) {
      arr[nums[i]] = 0
    }
    arr[nums[i]] += 1
  }

  return arr
    .map((x, i) => {
        if(x > 0){
            return {
                [`${i}`]: x,
              }
        }    
    }).filter(x => x !== null)
}

const i = [1, 1, 2, 3, 3, 2, 4, 56, 7, 8, 1]
console.log(countNumbers(i))
