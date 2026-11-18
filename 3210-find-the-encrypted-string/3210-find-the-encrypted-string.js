/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let result = ""
    
    for(let i = 0; i < s.length; i++){
        let res = (i+k)%s.length;
        result += s[res]
    }

    return result
};