/*Write a function `countVowelsAndConsonants` that accepts a string and returns an object with the count of vowels and consonants.

- **Requirements**:
    - Ignore spaces and non-alphabetical characters.
    - Treat both uppercase and lowercase letters as the same.*/


    function countVowelsAndConsonants(str) {
      
        const vowels = 'aeiou';
        
        let vowelCount = 0;
        let consonantCount = 0;
    
  
        str = str.toLowerCase();
    
     
        for (let char of str) {
            if (/[a-z]/.test(char)) { 
                if (vowels.includes(char)) {
                    vowelCount++;
                } else {
                    consonantCount++;
                }
            }
        }
    
        return {
            vowels: vowelCount,
            consonants: consonantCount
        };
    }
    