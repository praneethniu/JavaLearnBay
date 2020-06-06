const maxSubArray = (nums) => {
  let maxSoFar = Number.NEGATIVE_INFINITY
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if(sum > maxSoFar) maxSoFar = sum
    if(sum < 0) sum = 0
  }
  return maxSoFar
}

const i = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(i))
