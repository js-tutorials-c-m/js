Code = require('code'),
expect = Code.expect,
sumOfEvenAndPrime = require('./script.js');
describe('An Array of elements',function() {
	it('should return sum of even and prime numbers',function(){
		expect(sumOfEvenAndPrime([1,2])).to.be.equal(2);
		expect(sumOfEvenAndPrime([1,2,4])).to.be.equal(6);
	});
});