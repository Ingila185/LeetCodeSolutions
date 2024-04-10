class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
    std::vector<int> sortedNums = nums;
  std::sort(sortedNums.begin(), sortedNums.end());

  int left = 0;
  int right = sortedNums.size() - 1;

  while (left < right) {
    int sum = sortedNums[left] + sortedNums[right];

    if (sum == target) {
      // Find the indices in the original array based on sorted positions
      int index1 = std::distance(nums.begin(), std::find(nums.begin(), nums.end(), sortedNums[left]));
      int index2 = std::distance(nums.begin(), std::find(nums.begin(), nums.end(), sortedNums[right]));
      
      // Handle duplicates (if a number appears multiple times)
      if (index1 == index2) {
        // If both indices point to the same element (duplicate), find the second occurrence
        index2 = std::distance(nums.begin(), std::find(nums.begin() + index1 + 1, nums.end(), sortedNums[right]));
      }
      
      return {index1, index2};
    } else if (sum < target) {
      // If the sum is less than the target, move the left pointer to find a larger number
      left++;
    } else {
      // If the sum is greater than the target, move the right pointer to find a smaller number
      right--;
    }
  }

  // If the loop finishes without finding a pair, return an empty vector
  return {};    
    }
};
