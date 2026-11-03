/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice = Infinity;
    let maxprofit = 0;


    for(let i = 0; i < prices.length; i++){
        let currentPrice = prices[i]

        if(currentPrice < minprice){
            minprice = currentPrice
        }

        let profit =  currentPrice-minprice;

        if(profit > maxprofit){
            maxprofit = profit
        }
    }
    
    return maxprofit
};