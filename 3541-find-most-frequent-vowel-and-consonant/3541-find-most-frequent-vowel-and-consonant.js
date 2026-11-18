/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const map = new Map();
    let maxVowel = 0;
    let maxCons = 0;

    for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }

    for(let [key,value] of map){
        if(key == "a" || key == "e" || key == "i" || key == "o" || key == "u"){
            maxVowel = Math.max(maxVowel,value)
        }else{
            maxCons = Math.max(maxCons,value)
        }
    }

    return maxVowel + maxCons
};