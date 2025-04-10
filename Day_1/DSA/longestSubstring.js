//3. Longest Substring Without Repeating Characters


var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
   
     for (let i = 0; i < s.length; i++) {
       let currentSubstring = "";
   
       for (let j = i; j < s.length; j++) {
    
         if (currentSubstring.indexOf(s[j]) !== -1) {
           break; 
         }
   
         currentSubstring += s[j]; 
   
         if (currentSubstring.length > maxLength) {
           maxLength = currentSubstring.length;
         }
       }
     }
   
     return maxLength;
   
   };