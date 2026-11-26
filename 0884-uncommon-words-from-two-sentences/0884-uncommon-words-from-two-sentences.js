/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    
    const words = [...s1.split(" "), ...s2.split(" ")];

    for(let word of words){
       map.set(word, (map.get(word) || 0) + 1);
    }

    const result = [];

    for(let [key,value] of map){
        if(value == 1 ){
            result.push(key);
        }
    }

    return result;
};