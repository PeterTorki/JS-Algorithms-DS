var insertionSort = function(nums) {
    for(let i = 1 ; i < nums.length ; i++) {
        let x = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > x)
            nums[j + 1] = nums[j], j--;
        nums[j + 1] = x
    }
    return nums;
};