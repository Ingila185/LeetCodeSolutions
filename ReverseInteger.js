/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max_num = 2147483647
    const min_num = (-1 * max_num) + 1;

    var numToString = Math.abs(x).toString().split('').reverse().join('');

   (Number(x) < 0) ?  numToString = -1 * numToString : numToString
   
    return inRange(Number(min_num) , Number(max_num) , Number(numToString))

};

function inRange(num1, num2, num)
{
    minNum = Math.min(num1, num2);
    maxNum = Math.max(num1, num2);
    return (num>=minNum && num <= maxNum) ? num : 0
}