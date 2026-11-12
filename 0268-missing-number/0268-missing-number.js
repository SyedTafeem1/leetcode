/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let missingElement = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != i){
            missingElement = i;
            return missingElement;
        }
    }
    return nums.length;
};