// JavaScript Document
var Code = require('code'),
    expect = Code.expect,
    sphereArea = require('./sphere.js');	
	
describe('computes sphere area' , function () {
	
	it('value of sphere_area'  , function () {
		expect(sphereArea(3)).to.be.equal(113.04);
		
    });
	
	it('Should return a number',function(){
		expect(typeof sphereArea(4)).to.be.equal("number");
     });		
})

