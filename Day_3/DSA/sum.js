//Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

var subarraySum = function(nums, k) {
    const map = new Map();
    map.set(0, 1);
    let count = 0;
    let sum= 0;

    for(let num of nums){
        sum =sum+num;
        if(map.has(sum - k)){
            count += map.get(sum-k);
        }
        map.set(sum, (map.get(sum) || 0)+1);
    }

    return count;
};

