/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
var prevMap = new Map();
for (var i = 0; i < nums.length; i++) //Traverse the array. Pick one element.
{
    //Calculate difference of that element from target. This would be the complementary pair.
    let complementaryPair = target - nums[i]; 
    //See if the Hashmap already contains the complementary pair. If it does, return the index of that element and the current looping variable.
    if(prevMap.get(complementaryPair) != undefined) return  [prevMap.get(complementaryPair) , i]
    //Otherwise, add the looping variable with its index to the hashmap. 
    prevMap.set(nums[i] , i)
}
};
