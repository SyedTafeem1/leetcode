/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map= new Map()

    for(let key of nums){
        if(!map.has(key)){
            map.set(key,1)
        }else{
            map.set(key,map.get(key)+1)
        }
    }

    for(let [key,value] of map){
        if(value >= 2)return true
    }

    return false
};