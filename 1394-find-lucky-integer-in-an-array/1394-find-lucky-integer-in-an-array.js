/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const map = new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }    
    }
    let largest = -1;

    for(let [key,value] of map){
        if(key == value){
            largest = Math.max(largest,key)
        }
    }

    return largest;
};