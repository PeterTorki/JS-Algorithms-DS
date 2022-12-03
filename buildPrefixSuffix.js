var buildSuffix = function(arr) {
    const n = arr.length
    let nums = new Array(n).fill(0);
    nums[n - 1] = arr[n - 1];
    for(let i = n - 2 ; i >= 0 ; i--)    
        nums[i] = nums[i + 1] + arr[i]

    return nums
}

var buildPrefix = function(arr) {
    const n = arr.length
    let nums = new Array(n).fill(0);
    nums[0] = arr[0];
    for(let i = 1 ; i <= n - 1 ; i++)
        nums[i] = nums[i - 1] + arr[i]
    
    return nums
}