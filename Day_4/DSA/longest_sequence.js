/*Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/

var longestConsecutive = function(nums) {

    const numSet = new Set(nums);
    let longestStreak = 0;
  
    for (let num of numSet) {
      // Only start counting if num is the start of a sequence
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }
  
        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
  
    return longestStreak;
  }
  
  
  
