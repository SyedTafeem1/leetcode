/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const mapOne = new Map();
    const mapTwo = new Map();
    const result = []

    for(let num of nums1){
        mapOne.set(num,(mapOne.get(num) || 0)+1);
    }

    for(let num of nums2){
        mapTwo.set(num,(mapTwo.get(num) || 0)+1);
    }

    for(let [key,value] of mapOne){
        if(mapTwo.has(key)){
            let count = Math.min(value,mapTwo.get(key));

            while(count > 0){
                result.push(key)
                count--
            }
        }
    }
    return result;
};