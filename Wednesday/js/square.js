//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


function sortedSquares(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[pos] = leftSquare;
        left++;
      } else {
        result[pos] = rightSquare;
        right--;
      }
      pos--;
    }
  
    return result;
  }
  
  