const request = require('request');
const { expect } = require('chai');

describe('payment api', () => {
  const URL = 'http://localhost:7865/';
  it('test response status code is 200', () => {
    request.get(URL, (err, res) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });
  it('test response data is correct', () => {
    request.get(URL, (err, res) => {
      expect(res).has.property('body', 'Welcome to the payment system');
    });
  });
});
