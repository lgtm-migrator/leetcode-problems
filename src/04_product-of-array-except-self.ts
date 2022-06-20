/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 *
 * @see https://leetcode.com/problems/product-of-array-except-self/
 *
 * Constraints:
 * - 2 <= nums.length <= 10^5
 * - -30 <= nums[i] <= 30
 * - The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * @example
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 *
 * @example
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 */
export function productExceptSelf (nums: number[]): number[] {
  return nums.map((_, i) => {
    // exclude the i-th element
    const withoutI =
      i === 0 ? nums.slice(1) : i === nums.length - 1 ? nums.slice(0, -1) : nums.slice(0, i).concat(nums.slice(i + 1))
    return withoutI.reduce((acc, cur) => {
      const r = acc * cur
      // necessary, but i dislike this a lot.
      if (Object.is(r, -0)) return 0
      return r
    }, 1)
  })
}
