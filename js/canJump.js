const canJump = (nums) =>  {
    return jump(0, 0, nums)   
}
const jump = (first, x, nums) => {
    //console.log(x)
    if(x ==nums.length) return true
    if(x > nums.length) return false

    first = x
    x = nums[x] + first
   
    console.log(x,nums[first], x)
    return jump(x,nums[first], nums )
}


const i =[2,3,1,1,4]
console.log(canJump(i))