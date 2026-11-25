/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let max = "";

    for(let i = 0; i < number.length; i++){
        if(number[i] == digit){
            const newNum = number.slice(0,i) + number.slice(i+1) 
            if(newNum > max){
                max = newNum;
            }
        }
    }
    return max
};