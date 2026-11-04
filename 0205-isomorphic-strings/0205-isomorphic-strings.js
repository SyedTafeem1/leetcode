/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
        if(s.length !== t.length) return false;

    const mapOne = new Map();
    const mapTwo = new Map();

    for(let i = 0; i < s.length; i++) {
        if(!mapOne.has(s[i])) {
            mapOne.set(s[i], []);
        }
        mapOne.get(s[i]).push(i);
    }

    for(let i = 0; i < t.length; i++) {
        if(!mapTwo.has(t[i])) {
            mapTwo.set(t[i], []);
        }
        mapTwo.get(t[i]).push(i);
    }

    if(mapOne.size !== mapTwo.size) return false;

    let arr1 = [...mapOne.values()].flat();
    let arr2 = [...mapTwo.values()].flat();

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }

    return true;
};