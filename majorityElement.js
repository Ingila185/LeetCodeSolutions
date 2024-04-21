/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var mapOfOccurences  = new Map();
    nums.forEach((num)=>
    {
    mapOfOccurences[num] ? mapOfOccurences[num]++ : mapOfOccurences[num] = 1;
    })
 return Object.keys(mapOfOccurences).filter(function (item)
   {
    if(mapOfOccurences[item] == Math.max(...Object.values(mapOfOccurences))) return mapOfOccurences[item]
   })

};
