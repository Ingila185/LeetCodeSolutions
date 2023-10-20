/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    var arrayOfSame = [];
    var arrayOfOccurences = [];

      nums.filter((item, index)=>
  {
     if(!arrayOfSame.includes(item))
     {
         arrayOfSame.push(item)
     }
     
     else
     {
         arrayOfOccurences.push(item)
     }
    
  })

  return arrayOfOccurences;
};