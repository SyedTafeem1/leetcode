/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let word = ""
    for(let char of s){
        let code = char.charCodeAt(0)
    if((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code >= 48 && code <=57)){
            word += char
        }
    }
    let j = word.length-1
    for(let i = 0; i <= j; i++){

        if(word[i].toLowerCase() != word[j].toLocaleLowerCase()){
            return false
        }
        j--
    }
    return true  
};