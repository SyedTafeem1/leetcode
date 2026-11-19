/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const convenience = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    const map = new Map()
    const res = []

    for(let i = 0; i < 26; i++){
        map.set(alphabets[i],convenience[i])
    }

    for(let word of words){
        let newWord = ""
        for(let char of word){
            newWord += map.get(char)
        }
        res.push(newWord)
    }
    const result = new Set(res)
    return result.size
};