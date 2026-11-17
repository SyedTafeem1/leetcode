/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed)
    let count = 0;
    
    for(let str of words){
        let isValid = true;
        for(let s of str){
            if(!set.has(s)){
                isValid = false;
                break;
            }
        }

        if(isValid){
            count++
        }
    }

    return count;
};