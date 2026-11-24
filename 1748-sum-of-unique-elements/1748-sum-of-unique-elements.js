/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map = new Map()
    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    let sum = 0;

    for(let [key,value] of map){
        if(value == 1){
            sum += key
        }
    }
    return sum;
};