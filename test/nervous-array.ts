/// <reference path="../typings/tsd.d.ts" />

import * as NervousArray from '../lib/array';
import chai = require('chai');

var expect = chai.expect;

describe ('nervous-array', () => {
  let a,
      b;
  
  beforeEach(() => {
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    b = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  });
  
  it ('should create an array of zeros', () => {
    
    let a = NervousArray.zeros(42);
    
    expect(a).to.be.an('array');
    for (let i = 0; i < a.length; i++) {
      expect(a[i]).to.equal(0);
    }
    
  });
  
  it ('should sum an array', () => {
    
    expect(NervousArray.sum(a)).to.equal(45);
    
  });
  
  it ('should sum an squared array', () => {
    
    expect(NervousArray.squareSum(a)).to.equal(285);
    
  });
  
  it ('should compute the mean of an array', () => {
    
    expect(NervousArray.mean(a)).to.equal(5);
    
  });
  
  it ('should compute the root mean square of an array', () => {
    
    expect(Math.floor(100 * NervousArray.rootMeanSquare(a)) / 100).to.equal(16.88);
    
  });
  
  it ('should sum several arrays', () => {
    
    let res = NervousArray.add(a, b, NervousArray.zeros(9));
    
    expect(res).to.be.an('array');
    for (let i = 0; i < res.length; i++) {
      expect(res[i]).to.equal(2*(i + 1) + 1);
    }
    
  });
  
  it ('should add a scalar to an array', () => {
    
    let res = NervousArray.addScalar(a, 10);
    
    expect(res).to.be.an('array');
    for (let i = 0; i < res.length; i++) {
      expect(res[i]).to.equal(i + 1 + 10);
    }
    
  });
  
  it ('should substract several arrays to the first', () => {
    
    let res = NervousArray.sub(a, b, NervousArray.zeros(9));
    
    expect(res).to.be.an('array');
    for (let i = 0; i < res.length; i++) {
      expect(res[i]).to.equal(-1);
    }
    
  });
  
  it ('should multiply several arrays', () => {
    
    let res = NervousArray.multiply(a, b),
        res2 = NervousArray.multiply(a, b, NervousArray.zeros(9));
    
    expect(res).to.be.an('array');
    for (let i = 0; i < res.length; i++) {
      expect(res[i]).to.equal((i+1) * (i+2));
    }
    expect(res2).to.be.an('array');
    for (let i = 0; i < res2.length; i++) {
      expect(res2[i]).to.equal(0);
    }
    
  });
  
  it ('should multiply a scalar to an array', () => {
    
    let res = NervousArray.multiplyByScalar(a, 10);
    
    expect(res).to.be.an('array');
    for (let i = 0; i < res.length; i++) {
      expect(res[i]).to.equal((i + 1) * 10);
    }
    
  });
  
});