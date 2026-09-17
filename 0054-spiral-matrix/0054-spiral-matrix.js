/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length-1;
    let left = 0;
    let right = matrix[0].length-1
    const result = []

    while(top <= bottom && left <= right){

        for(let i = left; i <= right; i++){
            result.push(matrix[top][i])
        }
        top++

        for(let i = top; i <= bottom; i++){
            result.push(matrix[i][right])
        }
        right--

        for(let i = right; i >= left && top <= bottom; i--){
            result.push(matrix[bottom][i])
        }
        bottom--

        for(let i = bottom; i >= top && left <= right; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result
};