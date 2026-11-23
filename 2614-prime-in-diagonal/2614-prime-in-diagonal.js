/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    function isPrime(n){
        if(n < 2)return false;

        for(let i = 2; i*i <= n; i++){
            if(n % i == 0)return false;
        }

        return true;
    }

    let n = nums.length;
    let max = 0;

    for(let i = 0; i < n; i++){
        if(isPrime(nums[i][i])){  //first diagonal
            max = Math.max(max,nums[i][i])
        }

        if(isPrime(nums[i][n-1-i])){  //second diagonal
            max = Math.max(max,nums[i][n-1-i])
        }
    }

    return max;
};