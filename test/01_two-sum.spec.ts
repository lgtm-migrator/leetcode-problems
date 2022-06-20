import { twoSum } from '../src/01_two-sum'

describe('#twoSum unoptimized', () => {
  it('should find indices to reach target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
  })
  
  it('should return an empty array if no two numbers add up to the target', () => {
    expect(twoSum([1, 2], 4)).toEqual([])
  })
})
