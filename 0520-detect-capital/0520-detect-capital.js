/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word === word.toUpperCase()){
        return true;
    }else if(word === word.toLowerCase()){
        return true;
    }else if(word === (word[0].toUpperCase() + word.toLowerCase().slice(1))){
        return true;
    }

    return false;
};