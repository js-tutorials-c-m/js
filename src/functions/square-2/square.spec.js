// JavaScript Document

Code = require('code'),
expect = Code.expect,
AreaOfSquare = require('./square.js');
describe('Area of square',function() {
	it('Should calculate the Area of square ',function(){
		expect(AreaOfSquare(5)).to.be.equal(25);
		
	});

});