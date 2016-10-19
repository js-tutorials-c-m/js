// JavaScript Document
var Code = require('code'),
    expect = Code.expect,
    sphereArea = require('./sphere.js');	
	
describe('computes sphere area' , function () {
	
	it('value of sphere_area'  , function () {
		expect(sphereArea(3)).to.be.equal(113.04);
	    expect(sphereArea(4)).to.be.equal(200.96);
		expect(sphereArea(2)).to.be.equal(50.24);
		expect(sphereArea(1)).to.be.equal(12.56);
		
    });
		

})

