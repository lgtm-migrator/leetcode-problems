/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param prices stock prices per day
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * Constraints:
 *
 * - 1 <= prices.length <= 10^5
 * - 0 <= prices[i] <= 10^4
 *
 * @example Input: prices = [7,1,5,3,6,4]
 * Output: 5
 *
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
export function maxProfit (prices: number[]): number {
  let maxProfit = 0
  for (const [idx, day1] of prices.entries()) {
    let maxProfitToday = 0
    // stocks must be sold at a future date
    for (const day2 of prices.slice(idx + 1)) {
      if (day2 - day1 > maxProfitToday) maxProfitToday = day2 - day1
    }

    if (maxProfitToday > maxProfit) maxProfit = maxProfitToday
  }

  return maxProfit
}
