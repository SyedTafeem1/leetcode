/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let majority;
    let count = 0
    
    for (const num of nums) {

        if (count === 0) {
            majority = num
        }
        
        if(num == majority){
            count += 1
        }else{
            count += -1 
        }
    }
    
    return majority
};