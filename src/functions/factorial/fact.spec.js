// JavaScript Document
Code = require('code'),
expect = Code.expect,
factorial = require('./fact.js');
describe('factorial of a number', function() {
	it('Should calculate the factorial of a number',function(){
		expect(factorial(4)).to.be.equal(24);
		expect(factorial(0)).to.be.equal(1);
		expect(factorial(2)).to.be.equal(2);
		expect(factorial(5)).to.be.equal(120);
	});
});