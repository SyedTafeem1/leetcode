/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a == b)return -1;

    let longestUncommon = 0;

    if(a.length > b.length){
        longestUncommon = a.length;
    }else{
        longestUncommon = b.length;
    }

    return longestUncommon;
};