/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let left = 0;
    let right = s.length-1;

    let half = Math.floor((left+right)/2)

    const a = s.slice(left,half+1)
    const b = s.slice(half+1)

    let vowela = 0;
    let vowelb = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i].toLowerCase() == "a" || a[i].toLowerCase() == "e" || a[i].toLowerCase() == "i" || a[i].toLowerCase() == "o" || a[i].toLowerCase() == "u"){
            vowela++
        }
        
        if(b[i].toLowerCase() == "a" || b[i].toLowerCase() == "e" || b[i].toLowerCase() == "i" || b[i].toLowerCase() == "o" || b[i].toLowerCase() == "u"){
            vowelb++
        }
    }

    return (vowela == vowelb)
};