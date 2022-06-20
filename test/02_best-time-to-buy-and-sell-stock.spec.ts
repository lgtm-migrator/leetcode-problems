import { maxProfit } from '../src/02_best-time-to-buy-and-sell-stock'

describe('#maxProfit', () => {
  it('should find the maximum profit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })
  it('should stay away from bad deals', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})
