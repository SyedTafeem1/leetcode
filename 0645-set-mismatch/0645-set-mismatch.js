/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    let duplicate = 0;

    for(let [key,value] of map){
        if(value > 1)duplicate = key
    }
    let missing = 0;
    for(let i = 1; i <= nums.length; i++){
        if(!map.has(i))missing = i
     
    }

    return [duplicate,missing]
};