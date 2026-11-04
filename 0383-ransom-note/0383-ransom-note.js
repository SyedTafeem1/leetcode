/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const mapOne = new Map();
    const mapTwo = new Map();

    for(let key of ransomNote){
        mapOne.set(key,[mapOne.get(key)||0]+1)
    }

    for(let key of magazine){
        mapTwo.set(key,[mapTwo.get(key)||0]+1)
    }

    for(let [key,value] of mapOne){
        if(!mapTwo.has(key)){
            return false;
        }else if(mapTwo.get(key) < value){
            return false;
        }
    }

    return true;
};