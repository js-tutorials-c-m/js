function sumOfEvenAndPrime(numbers) {
	var sum = 0;
	for(var i = 0; i <= numbers.length; ++i) {
		if(  numbers[i] % 2 === 0 ) sum += numbers[i];
	}
	return sum;
};



var sum = sumOfEvenAndPrime([1,2,44,31]);
console.log(sum);

module.exports = sumOfEvenAndPrime;