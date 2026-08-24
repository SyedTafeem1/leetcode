/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    if(s.length === 0) return "";
    for(let i=s.length-1;i>=0;i--){
        if(s[i] % 2 !== 0){
            s=s.slice(0,-1)
        }else{
            break;
        }
    }
    return s
};