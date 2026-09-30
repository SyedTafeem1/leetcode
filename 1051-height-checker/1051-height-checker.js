/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0
    let height = [...heights]
    for(let i = 0; i < heights.length; i++){
        for(let j = 0; j < heights.length-i-1;j++){
            if(heights[j] > heights[j+1]){
                const temp = heights[j]
                heights[j] = heights[j+1]
                heights[j+1] = temp
            }
        }
    }
    for(let i= 0; i < heights.length;i++){
        if(heights[i] != height[i]) count++
    }
    return count
};