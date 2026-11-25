/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    for(let word of words){
        let i = 0;
        let j = word.length-1;
        let isPal = true;
        while(i <= j){
            if(word[i] != word[j]){
                isPal = false;
            }
            i++;
            j--;
        }
        if(isPal){
            return word
        }
    }

    return ""
};