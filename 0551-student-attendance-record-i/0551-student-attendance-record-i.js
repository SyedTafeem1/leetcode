/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let p = 0;
    let l = 0;
    let a = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] == "P"){
            p++
        }else if(s[i] == "L" && s[i+1] == "L" && s[i+2] == "L"){
            l = 3;
        }else if(s[i] == "A"){
            a++
        }
    }

    if(a >= 2 || l > 2){
        return false;
    }

    return true;
};