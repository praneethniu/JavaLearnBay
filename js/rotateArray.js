const rotateArray = (nums, k) => {
    const a = []
    for (let i = 0; i < nums.length; i++) {
      a[(i + k) % nums.length] = nums[i];
      console.log(a, i, k, nums.length)
    }
    for (let i = 0; i < nums.length; i++) {
      nums[i] = a[i];
    }
    return nums
  }


const i = [1,2,3,4,5,6,7]
console.log("sol: ",rotateArray(i, 3))
