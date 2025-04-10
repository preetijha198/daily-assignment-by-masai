//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

//Find two lines that together with the x-axis form a container, such that the container contains the most water.

//Return the maximum amount of water a container can store.


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
  
    while (left < right) {
      const heightLeft = height[left];
      const heightRight = height[right];
      const width = right - left;
      const currentWater = Math.min(heightLeft, heightRight) * width;
  
      maxWater = Math.max(maxWater, currentWater);
  
      // Move the pointer with the smaller height
      if (heightLeft < heightRight) {
        left++;
      } else {
        right--;
      }
    }
  
    return maxWater;
  
  
  };