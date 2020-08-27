const removeDuplicates = function(nums) {
  let pre = nums[0];
  for (let i = 1; i < nums.length; ) {
    if (nums[i] !== pre) {
      pre = nums[i];
      i += 1;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
