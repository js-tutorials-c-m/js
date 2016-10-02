var Code = require('code'),
    expect = Code.expect,
    isEven = require('./is-even.js');

describe('Test weather the function is prime nor not' , function () {

  it('Should return true of it is prie'  , function () {
  expect(isEven(5)).to.be.equal(false);
  expect(isEven(6)).to.be.equal(true);
} );

})
