// JavaScript Document
var Code = require('code'),
    expect = Code.expect,
    derivative = require('./derivative.js');	
	
describe('computes derivative of x^n' , function () {
	
	it('value of sphere_area'  , function () {
		expect(derivative(4,3)).to.be.equal(48);
		
    });
	
	it('Should return a number',function(){
		expect(typeof derivative(4,4)).to.be.equal("number");
     });		
})

