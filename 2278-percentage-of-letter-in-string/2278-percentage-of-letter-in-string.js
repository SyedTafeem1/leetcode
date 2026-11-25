/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let percentage = 0;
    let count = 0;

    for(let char of s){
        if(char == letter)count++
    }

    percentage = Math.floor((count/s.length) * 100)

    return percentage
};