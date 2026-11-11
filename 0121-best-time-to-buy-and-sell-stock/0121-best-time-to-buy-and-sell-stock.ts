function maxProfit(prices: number[]): number {
    let minorPrice = prices[0]
    let maxNumber: number = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < minorPrice) {
            minorPrice = prices[i]
        }

        if(prices[i] - minorPrice > maxNumber) {
            maxNumber = prices[i] - minorPrice
        }
    }

// let maxNumber: number = 0;
//     let subtraction: number = 0;
//     for (let i = 0; i <= prices.length; i++) {
//         let j = i + 1
//         for (j; j < prices.length; j++) {
//             subtraction = prices[j] - prices[i]
//             if (subtraction > maxNumber) {
//                 maxNumber = subtraction
//             }
            
//         }
//     }
    return maxNumber

};