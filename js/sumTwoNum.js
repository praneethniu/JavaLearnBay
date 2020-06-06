const twoSum = (nums, target) => {
  const result = {}
  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] !== undefined) {
      return [result[nums[i]], i]
    }
    result[target - nums[i]] = i
  }
}

const i = [3,2,3]
console.log(twoSum(i, 6))
