/*Write a function `isPalindrome` that checks if a given string is a palindrome (reads the same forward and backward).

- **Requirements**:
    - Ignore spaces, punctuation, and case differences.*/


    function isPalindrome(str) {
        const isAlphaNumeric = (char) => /[a-z0-9]/i.test(char);
        let left = 0;
        let right = str.length - 1;
    
        while (left < right) {
            while (left < right && !isAlphaNumeric(str[left])) {
                left++;
            }
            while (left < right && !isAlphaNumeric(str[right])) {
                right--;
            }
    
            if (str[left].toLowerCase() !== str[right].toLowerCase()) {
                return false;
            }
    
            left++;
            right--;
        }
    
        return true;
    }
    