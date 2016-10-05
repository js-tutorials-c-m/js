// JavaScript Document
var Code = require('code'),
    expect = Code.expect,
    cuberoot = require('./cuberoot.js');	
	
describe('computes cuberoot' , function () {
	
	it('value of cuberoot'  , function () {
		expect(cuberoot(27)).to.be.equal(3);
		
    });
	
	it('Should return a number',function(){
		expect(typeof cuberoot(8)).to.be.equal("number");
     });		
})

