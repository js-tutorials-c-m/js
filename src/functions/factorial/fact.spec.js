// JavaScript Document
Code = require('code'),
expect = Code.expect,
factorial = require('./fact.js');
describe('factorial of a number', function() {
	it('Should calculate the factorial of a number',function(){
		expect(factorial(4)).to.be.equal(24);
	});
});