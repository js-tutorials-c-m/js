// JavaScript Document
Code = require('code'),
expect = Code.expect,
solution = require('./multiples.js');
describe('value of 4&5 multiples',function() {
	it('',function(){
		expect(solution([24,25,3])).to.be.equal(49);
		expect(solution([1,2,3,4,5])).to.be.equal(9);
		expect(solution([1,2,4])).to.be.equal(4);

	});
});
