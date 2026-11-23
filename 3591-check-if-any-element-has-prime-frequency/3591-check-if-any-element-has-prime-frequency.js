/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    function isPrime(n){
        if(n < 2)return false;

        for(let i = 2; i * i <= n; i++){
            if(n % i == 0)return false;
        }

        return true;
    }

    const map = new Map();

    for(let num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1)
        }
    }

    for(let [key,value] of map){
        if(isPrime(value)) return true;
    }

    return false;
};