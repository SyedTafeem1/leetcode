/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) {
    const map = new Map()

    for(let num of nums){
        if(num % 2 == 0){
             map.set(num, (map.get(num) || 0) + 1);
        }
    }

    for(let num of nums){
        if(num % 2 == 0 && map.get(num) == 1)return num;
    }

    return -1
};