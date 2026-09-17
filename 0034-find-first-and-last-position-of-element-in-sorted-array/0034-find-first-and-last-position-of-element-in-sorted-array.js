/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstPosition = -1;
    let lastPosition = -1;
    let result = [];

    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            lastPosition = mid
        }

        if(nums[mid] <= target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    left = 0;
    right = nums.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        
         if(nums[mid]==target){
            firstPosition = mid
        }

        if(nums[mid] >= target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    result.push(firstPosition)
    result.push(lastPosition)
    return result
    
};