/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString()
    let isPalindrome = true
    let i = 0
    let j = x.length-1
     if(x<0){
        return false
     }

    while(i<j){
        if(x[i]!=x[j]){
        isPalindrome = false
        break
        }
        i++
        j--
    }
    if(isPalindrome){
        return true
    }else{
        return false
    }
    
};