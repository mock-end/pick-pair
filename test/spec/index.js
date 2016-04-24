'use strict';

var expect = require('chai').expect;


describe('pick-pair: ', function () {

  var pickPair = require('../../');

  it('common', function () {

    expect(pickPair()).to.be.eql({});
    expect(pickPair(null)).to.be.eql({});
    expect(pickPair(1)).to.be.eql({});
    expect(pickPair('a')).to.be.eql({});

    expect(pickPair([])).to.be.eql({});
    expect(pickPair({})).to.be.eql({});

    expect(pickPair([2])).to.be.eql({ '0': 2 });
    expect(pickPair({ a: 1 })).to.be.eql({ a: 1 });
  });
});
