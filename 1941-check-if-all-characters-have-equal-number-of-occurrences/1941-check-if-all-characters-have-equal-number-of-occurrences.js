/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map = new Map()

   for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }

    const frequency = [...map.values()];

    for(let i = 0; i < frequency.length-1; i++){
        if(frequency[i] != frequency[i+1])return false;
    }

    return true;
};