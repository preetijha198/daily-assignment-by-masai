//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

var productExceptSelf = function(nums) {
    const n=nums.length;
    const answer = new Array(n).fill(1);

    let leftProduct = 1;
    for(let i=0; i<n; i++){
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for(let i=n-1;i>=0;i--){
        answer[i] *= rightProduct;
        rightProduct *=nums[i];
    }
    return answer;
};