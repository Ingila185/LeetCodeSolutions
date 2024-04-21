var removeDuplicates = function(nums) {
var i = 1;
var j = 1;

for(j = 1; j < nums.length; j++){
    if(nums[j] != nums[j-1])
    {
       nums[i] = nums[j]   
         i++;
    }
}  
return i
};
