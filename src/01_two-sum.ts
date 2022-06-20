/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
 * @see https://leetcode.com/problems/two-sum/
 * @param nums input array
 * @param target number to reach
 *
 * Constraints:
 *
 * 2 <= nums.length <= 10^4
 *
 * -10^9 <= nums[i] <= 10^9
 *
 * -10^9 <= target <= 10^9
 *
 * Only one valid answer exists.
 *
 * @example Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @example Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * @example Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
export function twoSum (nums: number[], target: number): number[] {
  for (const [i1, n1] of nums.entries()) {
    for (const [i2, n2] of nums.entries()) {
      if (i1 === i2) continue
      if (n1 + n2 === target) return [i1, i2]
    }
  }

  return []
}

// Follow-up
// /**
//  * Idea: ignore numbers that we've already added up
//  */
// export function twoSumOptimized(nums: number[], target: number): number[] {

// }
