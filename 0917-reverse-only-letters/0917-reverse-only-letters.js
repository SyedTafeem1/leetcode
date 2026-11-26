/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    s = s.split("");
    let i = 0;
    let j = s.length-1;

    while(i <= j){
        if(!((s[i] >= "A" && s[i] <= "Z") || (s[i] >= "a" && s[i] <= "z"))){
            i++
        }else if(!((s[j] >= "A" && s[j] <= "Z") || (s[j] >= "a" && s[j] <= "z"))){
            j--
        }else{
            [s[i],s[j]] = [s[j],s[i]]
            i++
            j--
        }
    }

    return s.join("")
};