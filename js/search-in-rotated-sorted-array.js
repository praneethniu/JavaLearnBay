//https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  const index = rotateArray(nums)
  const newNums = []
  let k = 0
  for (let i = index; i < nums.length; i++) {
    newNums[k] = nums[i]
    k++
  }
  for (let i = 0; i < index; i++) {
    newNums[k] = nums[i]
    k++
  }
  const searchIndex =  binarySearch(newNums, target) 
  //console.log(searchIndex, newNums)
  return searchIndex+1 < index ? searchIndex + index : searchIndex - index +1
}

const rotateArray = (nums) => {
  const rotate = (nums, start, end) => {
    if (start <= end) {
      //console.log(start, end, "=>", nums[start], nums[end])
      if (start === end) {
        return start
      }
      if (nums[start] > nums[end] && end - start === 1) {
        return end
      }

      let mid = Math.floor((start + end) / 2)

      if (nums[mid] < nums[start]) {
        return rotate(nums, start, mid)
      } else if (nums[mid] > nums[start]) {
        return rotate(nums, mid, end)
      }
    }
    return 0
  }
  return rotate(nums, 0, nums.length - 1)
}

const binarySearch = (nums, param) => {
    let binary = (nums, start, end, param) => {
        let mid = Math.floor((start + end) / 2)
        if (nums[start] === param) {
          return start
        } else if (nums[end] === param) {
          return end
        }
        if (start >= end) {
          return -1
        }
        if (nums[mid] === param) {
          return mid
        } else if (nums[mid] > param) {
          return binary(nums, start, mid, param)
        } else {
          return binary(nums, mid + 1, end, param)
        }
      }
    
      return binary(nums, 0, nums.length - 1, param) 
}

const x = [4,5,6,7,0,1,2]
console.log('s', search(x, 3))

// for(let i=0; i< x.length; i++){
//     console.log('s', search(x, x[i]))

// }
