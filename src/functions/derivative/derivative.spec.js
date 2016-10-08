// JavaScript Document
var Code = require('code'),
    expect = Code.expect,
    derivative = require('./derivative.js');	
	
describe('computes derivative of x^n' , function () {
	
	it('value of derivative'  , function () {
		expect(derivative(4,3)).to.be.equal(48);
		expect(derivative(2,4)).to.be.equal(32);
		
    });
		
})

