import { productExceptSelf } from '../src/04_product-of-array-except-self'

describe('#productExceptSelf', () => {
  it('should calculate the product of every element except at the current index', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0])
  })
})
