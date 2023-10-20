/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

    for(var i = 0; i < nums.length; i++)
    {
        for(var j = i+1; j < nums.length; j++)
        {
            if (nums[i] === nums[j])
            {
                return nums[i]
            }
        }
    }
    };
 
 