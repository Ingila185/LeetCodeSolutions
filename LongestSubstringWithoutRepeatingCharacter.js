/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    /**/
    var  right = 0;
    var currentWindow = '';
    var left = 0;
    var max = 0;
    
    for(right = 0; right < s.length ; right++)
    {
      if (currentWindow.includes(s[right]))
      {
        //first repeating character occured, remove it from the window, increase left and shrink the window
        currentWindow.slice(s[right],1)
        left = left +1
        currentWindow = s.substring(left, right+1)
     
      while(isCurrentWindowContainsDupes(currentWindow) == true)
      {
        //Check if remaining current window contains duplicates, if yes, keep on shrinking the window
        left = left + 1;
        currentWindow = s.substring(left, right+1)
      }
    
    
      }
    
      else
      { 
        //Character doesnt exist. keep expanding the window 
      currentWindow = s.substring(left, right+1)
     
      }
    
    
    max = Math.max(max, currentWindow.length)
    }
    
    return max;
    
    };
    
    function isCurrentWindowContainsDupes(current)
    {
      var set = new Set(Array.from(current))
      return (set.size == current.length) ? false : true
    }