// JavaScript Document
function solution(number) {
    var total = 0;
    for (var i = 0; i <= number.length; i++)
    {
        if (number[i] % 4 === 0 || number[i] % 5 === 0)
        total += number[i];
        }
		console.log(total);
	 return total;
};
var total=solution([24,25,3]);


module.exports = solution;