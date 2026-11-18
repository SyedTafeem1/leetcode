/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let largest = -1;
    let secondLargest = -1;
    for(let digit of s){
        if(digit >= 0 && digit <= 9){
            digit = Number(digit)
            if(digit > largest){
                secondLargest = largest;
                largest = digit;
            }else if(digit < largest && digit > secondLargest){
                secondLargest = digit;
            }
        }
    }

    return secondLargest
};