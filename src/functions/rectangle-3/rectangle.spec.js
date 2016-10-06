// JavaScript Document
const Code = require('code');
const expect = Code.expect;
const rectangle = require('./rectangle.js');
    

	
describe('rectangle function',function(){
	
	it('do rectangle',function(){
		expect(rectangle(1,2)).equal(2);
		expect(rectangle(4,10)).equal(40);
		expect(rectangle(2,4)).equal(8);
	});
	
});