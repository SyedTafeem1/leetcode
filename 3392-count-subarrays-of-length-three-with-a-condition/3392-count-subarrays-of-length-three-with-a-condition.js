/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
        let count = 0;
    for(let i = 0; i < nums.length - 2; i++){
        const sub = []
        sub.push(nums[i]);
        sub.push(nums[i+1]);
        sub.push(nums[i+2]);
        
        // if(sub.length == 3){
            if((sub[0]+sub[2]) == sub[1]/2){
                count++
            }
    }
    return count;
};