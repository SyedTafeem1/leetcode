/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const capital = new Set();
    const small =new Set();
    
    let count = 0;
    
    for(let char of word){
        if(char >= "a" && char <= "z"){
            small.add(char)
        }else{
            capital.add(char)
        }
    }
    for(let char of small){
        if(capital.has(char.toUpperCase())) count++
    }

    return count;
};