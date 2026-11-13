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
        let valid = [...word].every((char)=>row1.includes(char.toLowerCase()))

        if(valid){
            result.push(word)
        }

        valid = [...word].every((char)=>row2.includes(char.toLowerCase()))

        if(valid){
            result.push(word)
        }

        valid = [...word].every((char)=>row3.includes(char.toLowerCase()))

        if(valid){
            result.push(word)
        }
    }

    return result;
};