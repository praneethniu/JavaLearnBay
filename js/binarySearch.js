/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, param) {
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
 };

 const x = [4,5,6,7,0,1,2]
 console.log('s', search(x, 3))