/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const characters = new Map()
    let result = 0 

    for(let char of chars){
        characters.set(char,[characters.get(char) || 0]+1)
    }
    for(let str of words){
        const map = new Map()

        for(let char of str){
            map.set(char,[map.get(char) || 0]+1)
        }
        let isValid = true

        for(let [key,value] of map){
            if(!characters.has(key) || value > characters.get(key)){
                isValid = false
                break;
            }
        }

        if(isValid){
            result += str.length;
        }

    }

    return result
};