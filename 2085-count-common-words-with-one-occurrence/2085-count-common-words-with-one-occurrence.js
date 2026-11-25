/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const mapOne = new Map();
    const mapTwo = new Map();

    for(let word of words1){
        if(mapOne.has(word)){
            mapOne.set(word,mapOne.get(word)+1)
        }else{
            mapOne.set(word,1)
        }
    }

    for(let word of words2){
        if(mapTwo.has(word)){
            mapTwo.set(word,mapTwo.get(word)+1)
        }else{
            mapTwo.set(word,1)
        }
    }
    let count = 0;
    for(let [key,value] of mapOne){
        if(mapTwo.has(key) && mapTwo.get(key) == 1 && value == 1){
            count++
        }
    }

    return count;
};