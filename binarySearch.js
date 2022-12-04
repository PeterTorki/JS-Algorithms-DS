int = (num) => parseInt(num)

upperBound = (nums, target) => {
    let l = 0, r = nums.length - 1, best = -1
    while(l <= r) {
        let m = int((l + r) / 2)
        target < nums[m] ? (r = m - 1, best = m + 1) : l = m + 1
    }
    return best
}

lowerBound = (nums, target) => {
    let l = 0, r = nums.length - 1, best = -1
    while(l <= r) {
        let m = int((l + r) / 2)
        target >= nums[m] ? (l = m + 1, best = m + 1) : r = m - 1;
    }
    return best
}

binarySearch = (nums, target) => {
    let l = 0, r = nums.length - 1
    while(l <= r) {
        let m = int((l + r) / 2)
        if (nums[m] == target)  return true;
        target > nums[m] ? l = m + 1 : r = m - 1;
    }
    return false
}