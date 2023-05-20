const request = require('request');
const { expect } = require('chai');

describe('payment api', () => {
  const URL = 'http://localhost:7865';
  it('test response status code is 200', (done) => {
    request.get(`${URL}/cart/5`, (err, res) => {
      
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(200);
        done();
      }
    });
  });
  it('test response data is correct', (done) => {
    request.get(`${URL}/cart/5`, (err, res) => {
      
      if (err) done(err);
      else {
        expect(res).has.property('body', 'Payment methods for cart 5');
        done();
      }
    });
  });
  it('test response status code is 404 when id is not a number', (done) => {
    request.get(`${URL}/cart/five`, (err, res) => {
      if (err) done(err);
      else {
        expect(res.statusCode).to.be.equal(404);
        done();
      }
    });
  });
});
