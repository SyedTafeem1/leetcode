/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim().split(" ")
    let count = 0;
    let word = s[s.length-1]

    for(let letter of word){
        count++
    }

    return count
};