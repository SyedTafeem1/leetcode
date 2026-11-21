/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
 const set = new Set();
    let duplicate = 0;
    let actualSum = 0;

    for(let num of nums){
        actualSum += num;

        if(set.has(num)){
            duplicate = num;
        }else{
            set.add(num);
        }
    }

    const n = nums.length;
    const expectedSum = n * (n + 1) / 2;
    const missing = expectedSum - actualSum + duplicate;

    return [duplicate, missing];
};