/*The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
*/

var nextGreaterElement = function(nums1, nums2) {

    const stack = [];
    const map = new Map();
  
    for (let num of nums2) {
      while (stack.length && stack[stack.length - 1] < num) {
        map.set(stack.pop(), num);
      }
      stack.push(num);
    }
  
    
    while (stack.length) {
      map.set(stack.pop(), -1);
    }
  
    return nums1.map(num => map.get(num));
  
  };