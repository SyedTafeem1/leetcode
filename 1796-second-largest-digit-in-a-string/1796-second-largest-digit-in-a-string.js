/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const digits = new Set()
    let largest = -1;
    let secondLargest = -1;
    for(let num of s){
        if(num >= 0 && num <= 9){
            digits.add(Number(num))
        }
    }

    if(digits.size <= 1) return secondLargest

    for(let digit of digits){
        if(digit > largest){
            secondLargest = largest;
            largest = digit;
        }else if(digit < largest && digit > secondLargest){
            secondLargest = digit;
        }
    }

    return secondLargest
};