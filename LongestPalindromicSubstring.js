/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {


    var length = s.length;
     var result = "";
   if (length ==1) return s
   
     var centeredPalindrome = function(left, right) {
       while (left >= 0 && right < length && s[left] === s[right]) {
         //expand in each direction.
         left--;
         right++;
       }
   
       return s.slice(left + 1, right);
     };
   
     for (var i = 0; i < length - 1; i++) {
       var oddPal = centeredPalindrome(i, i + 1);
   
       var evenPal = centeredPalindrome(i, i);
   
       if (oddPal.length > 1)
         console.log("oddPal: " + oddPal);
       if (evenPal.length > 1)
         console.log("evenPal: " + evenPal);
   
       if (oddPal.length > result.length)
         result = oddPal;
       if (evenPal.length > result.length)
         result = evenPal;
     }
     return  result ;
   
   };
   
   