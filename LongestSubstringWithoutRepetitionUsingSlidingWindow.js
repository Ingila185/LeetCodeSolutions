/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
var start = 0;
var end = 0;
var maxLen = 0;
for (var end = 0; end < s.length; end++)
{
  let indexOfFirstAppearence = s.indexOf(s.charAt(end) , start)
  if(indexOfFirstAppearence != end) start = indexOfFirstAppearence + 1;
    maxLen = Math.max(maxLen, end-start+1)
}

return maxLen
};
