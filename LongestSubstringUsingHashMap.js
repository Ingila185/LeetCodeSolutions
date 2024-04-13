var lengthOfLongestSubstring = function(s) {
 let left = 0;
  let max = 0;
  const charIndexMap = new Map(); // Use a Map to store character and its last seen index

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // If the character already exists in the map and its index is within the current window
    if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
      // Update left pointer to skip past the previous occurrence of the character
      left = Math.max(left, charIndexMap.get(currentChar) + 1);
    }

    // Update the character's last seen index in the map
    charIndexMap.set(currentChar, right);

    // Update max length if current window is longer
    max = Math.max(max, right - left + 1);
  }

  return max;
};
