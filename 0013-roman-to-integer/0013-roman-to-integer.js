/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj = {
        I : 1, 
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let result = 0;

    for(let i = 0; i < s.length; i++){
        if(obj[s[i]] < obj[s[i+1]]){
            result -= obj[s[i]]
        }else{
            result += obj[s[i]]
        }
    }

    return result;
};