/*Write a function `reverseWords` that takes a string, and returns the string with each word reversed, while keeping the word order the same.

- **Requirements**:
    - Consider words to be separated by spaces.*/

    function reverseWords(str) {
        return str
            .split(' ')              
            .map(word => word.split('').reverse().join('')) 
            .join(' ');           
    }
    