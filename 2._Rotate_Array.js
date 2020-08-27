var rotate = function(nums, k) {
	for(i = 0; i < k; i++) {
		nums.unshift(nums[nums.length - 1])
		nums.splice(nums.length - 1, 1)
	}
	return nums;
};

// another 
const rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
};
