const expect = require('chai').expect;
const shuffle = require('../index');

describe('shuffle', function() {
  // input: not input
  // output: error message 'The parameter must be an array'
  it('app should return error message', function() {
    expect(() => shuffle()).to.throw(('The parameter must be an array'));
  });
  // input: array has at least one element
  // output: array has been shuffle
  it('app should return array', function() {
    const actual = [[1, 2], [2, 1]];
    const index = actual.indexOf(shuffle([1, 2]))
    expect(index).to.not.eql('-1');
  });
  // input: empty array
  // output: empty array 
  it('app should return empty array', function() {
    expect(shuffle([])).to.eql([]);
  });
  // input: not array
  // output: error message 'The parameter must be an array'
  it('app should return error message', function() {
    expect(() => shuffle('abc')).to.throw('The parameter must be an array');
  });
})