const Code = require('code');
const expect = Code.expect;
const distanceTravel = require('./distance.js');
    describe('distance function',function(){
	
	it('do distance',function(){
		expect(distanceTravel(5,6)).equal(30);
		expect(distanceTravel(3,2)).equal(6);
		expect(distanceTravel(9,3)).equal(27);
	});
	
});