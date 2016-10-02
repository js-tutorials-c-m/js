var Code = require('code'),
    expect = Code.expect,
    isEven = require('./is-even.js');

describe('Example for reference' , function () {

  it('should able to test an even number'  , function () {
  expect(isEven(5)).to.be.equal(false);
  expect(isEven(6)).to.be.equal(true);
} );

})
