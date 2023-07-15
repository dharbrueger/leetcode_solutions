export function firstMissingPositive(nums: number[]): number {
  nums.sort(function(a, b) {
      return a - b;
  });

  if (nums[0] > 1 || nums.length === 1 && nums[0] < 0 || nums[nums.length - 1] < 0) return 1;

  for (let i = 0; i <= nums.length - 1; i++) {
      if (nums[i] < 0 && nums[i + 1] > 1) {
          return 1;
      }

      if (nums[i] < 0) continue;

      if (nums[i + 1] - nums[i] > 1 && nums[i + 1] + nums[i] !== 0) {
          return nums[i] + 1;
      }

      if (i === nums.length - 1) {
          return nums[nums.length - 1] + 1;
      }
  }
};