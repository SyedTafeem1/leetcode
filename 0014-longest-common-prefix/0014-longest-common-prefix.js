/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""

    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== strs[0][i]){
                return result;
            }
            
        }
        if(strs[0].length > 0){
            result += strs[0][i]
        }
    }
    return result
};