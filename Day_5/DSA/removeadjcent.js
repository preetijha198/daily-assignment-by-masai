/*You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

*/
var removeDuplicates = function(s) {
    const stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop(); // Remove the duplicate
    } else {
      stack.push(char); // Add current character
    }
  }

  return stack.join('');
};