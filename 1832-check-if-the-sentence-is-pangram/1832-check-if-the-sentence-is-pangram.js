/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set()

    for(let char of sentence){
        set.add(char)
    }

    if(set.size != 26)return false;

    return true;
};