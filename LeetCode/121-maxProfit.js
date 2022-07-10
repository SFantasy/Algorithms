/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

  if (prices.length < 2) return 0;

  // 首先，在审查一个元素的时候，需要知道后面必须有比当前元素大的数字
  // 否则，返回 0
  // 这个过程时必须要遍历一遍数组的
  let profitNum = 0;
  let minPrice = prices[0];


  for (let i = 1; i < prices.length; i++) {

      // if (prices[i] > prices[i + 1]) continue;

      profitNum = Math.max(profitNum, prices[i] - minPrice);
      minPrice = Math.min(minPrice, prices[i]);

      // const current = prices[i];

      // 找到能买入的价格，即后面有比当前数字大的元素
      // const largerPrices = prices.slice(i, prices.length).filter(n => n > current);

      // if (largerPrices.length > 0) {
          // profitNum = Math.max(Math.max(...largerPrices) - current, profitNum);
      // }
  }

  return profitNum;
};
