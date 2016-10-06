// JavaScript Document
Code = require('code'),
expect = Code.expect,
rectangle = require('./rectangle.js');
describe('area of rectangle',function() {
	it('Should calculate te area of rectangle',function(){
		expect(rectangle([4,5])).to.be.equal(20);
	});
	it('Should return a number',function(){
		expect(typeof rectangle([4,5])).to.be.equal("number");
      });
});