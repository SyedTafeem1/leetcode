/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const m = mat.length;
    let sum = 0;
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i]
        sum += mat[i][m-i-1]
    }

    if(m % 2 !== 0) {
        sum -= mat[Math.floor(m / 2)][Math.floor(m / 2)];
    }
    
    return sum;
};