import { containsDuplicate } from '../src/03_contains-duplicate'

describe('#containsDuplicate', () => {
  it('should return true if the array has non-unique numbers', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
  })

  it('should return false if the array has no duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})
