/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    s1 = s1.split(" ");
    s2 = s2.split(" ");
    const map1 = new Map();
    const map2 = new Map();

    for(let word of s1){
        if(map1.has(word)){
            map1.set(word,map1.get(word)+1)
        }else{
            map1.set(word,1)
        }
    }

    for(let word of s2){
        if(map2.has(word)){
            map2.set(word,map2.get(word)+1)
        }else{
            map2.set(word,1)
        }
    }
    const result = []
    for(let [key,value] of map1){
        if(value == 1 && !map2.has(key)){
            result.push(key)
        }
    }

    for(let [key,value] of map2){
        if(value == 1 && !map1.has(key)){
            result.push(key)
        }
    }
    return result
};