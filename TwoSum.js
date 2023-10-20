/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    arrayOfAns = [];
    for(var i = 0; i < nums.length; i++)
    {
        for(var j = i+1; j < nums.length; j++)
        if(Number(nums[i] + nums[j])== target)
        {
        arrayOfAns.push([i])
        arrayOfAns.push([j])
        }
    }

    return arrayOfAns
};