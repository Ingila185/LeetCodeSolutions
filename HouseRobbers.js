/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let firstHouse = nums[0];
    let secondHouse = nums[1] ?? 0;
    let thirdHouse = firstHouse + (nums[2] ?? 0);
    for(let i = 3; i < nums.length; i++)
    {
        [firstHouse, secondHouse, thirdHouse] = [secondHouse,thirdHouse, Math.max(firstHouse, secondHouse) + nums[i]]
    }
    
    return Math.max(secondHouse, thirdHouse)
    };