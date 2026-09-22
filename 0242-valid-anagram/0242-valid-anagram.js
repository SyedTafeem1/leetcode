/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const mapOne = new Map()
    const mapTwo = new Map()

    for(let char of s){
        if(mapOne.has(char)){
            mapOne.set(char,mapOne.get(char)+1)
        }else{
            mapOne.set(char,1)
        }
    }

    for(let char of t){
        if(mapTwo.has(char)){
            mapTwo.set(char,mapTwo.get(char)+1)
        }else{
            mapTwo.set(char,1)
        }
    }

    for(let [key,value] of mapOne){
        if(!mapTwo.has(key)){
            return false
        }else{
            if(mapTwo.get(key) !== value) return false
        }
    }

    for(let [key,value] of mapTwo){
        if(!mapOne.has(key)) return false
    }

    return true

};