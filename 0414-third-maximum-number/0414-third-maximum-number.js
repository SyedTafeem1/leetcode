/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax (nums) {
    let firstMaximum = -Infinity
    let secondMaximum = -Infinity
    let thirdMaximum = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] == secondMaximum || nums[i] == firstMaximum || nums[i]==thirdMaximum){
            continue
         }
        if (nums[i] > firstMaximum) {
            thirdMaximum = secondMaximum
            secondMaximum = firstMaximum
            firstMaximum = nums[i]
        } else if (nums[i] > secondMaximum && nums[i] != firstMaximum) {
            thirdMaximum = secondMaximum
            secondMaximum = nums[i]
        } else if (nums[i] > thirdMaximum && nums[i] != secondMaximum) {
            thirdMaximum = nums[i]
        }
    }
    if (thirdMaximum == -Infinity) {
        return firstMaximum
    }
    return thirdMaximum
};