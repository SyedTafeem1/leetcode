/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const result = []
    const row1 = "qwertyuiop";
    const row2 = "asdfghjkl";
    const row3 = "zxcvbnm";

    for(let word of words){
        if([...word].every(char=>row1.includes(char.toLowerCase()))){
            result.push(word)
        }else if([...word].every(char=>row2.includes(char.toLowerCase()))){
            result.push(word)
        }else if([...word].every(char=>row3.includes(char.toLowerCase()))){
            result.push(word)
        }
    }
    return result;
};