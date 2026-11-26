/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const map = new Map();
    
    const words = [...s1.split(" "), ...s2.split(" ")];

    for(let word of words){
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1)
        }
    }

    const result = [];

    for(let [key,value] of map){
        if(value == 1 ){
            result.push(key);
        }
    }

    return result;
};