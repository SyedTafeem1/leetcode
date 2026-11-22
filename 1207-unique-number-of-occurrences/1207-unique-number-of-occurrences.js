/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for(let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }

    const set = new Set();

    for(let [key,value] of map){
        set.add(value)
    }

    if(set.size == map.size){
        return true;
    }else{
        return false;
    }

};