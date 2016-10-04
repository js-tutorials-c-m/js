Code = require('code'),
expect = Code.expect,
distanceTravel = require('./distance.js');
describe('To compute the distance travelled',function() {
	it('Should calculate the distance of travel',function(){
		expect(distanceTravel([8,20])).to.be.equal(160);
		
	});

});