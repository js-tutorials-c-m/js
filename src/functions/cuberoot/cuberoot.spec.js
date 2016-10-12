// JavaScript Document
Code = require('code'),
expect = Code.expect,
cuberoot = require('./cuberoot.js');

describe('compute value of cuberoot',function() {
	
	it('value of cuberoot',function(){
		expect(cuberoot(27)).to.be.equal(3);
		expect(cuberoot(8)).to.be.equal(2);
	});

});