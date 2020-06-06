// A sorted array given to you  which is rotated at particular index.
// You need to find smallest number in the sorted and rotated array.
const numInRotateArray = (nums) => {
  const rotate = (nums, start, end) => {
    if (start <= end) {
      console.log(start, end, "=>", nums[start], nums[end])
      if (start === end) {
        return nums[start]
      }
      if (nums[start] > nums[end] && end - start === 1) {
        return nums[end]
      }

      let mid = Math.floor((start + end) / 2)

      if (nums[mid] < nums[start]) {
        return rotate(nums, start, mid)
      } else if (nums[mid] > nums[start]) {
        return rotate(nums, mid, end)
      }
    }
    return nums[0]
  }

  return rotate(nums, 0, nums.length - 1)
}

const i = [5, 6, 7, 8, 10, 11,2 ,3]
console.log(numInRotateArray(i))
