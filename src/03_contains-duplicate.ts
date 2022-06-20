/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @see https://leetcode.com/problems/contains-duplicate/
 *
 * Constraints:
 *
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * @example
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * @example
 * Input: nums = [1,2,3,4]
 * Output: false
 */
export function containsDuplicate (nums: number[]): boolean {
  const seen: number[] = []
  for (const n of nums) {
    if (seen.includes(n)) return true
    seen.push(n)
  }
  return false
}
