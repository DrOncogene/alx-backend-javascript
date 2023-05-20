const sinon = require('sinon');
const moncha = require('mocha');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {

  beforeEach('spy on the log', () => {
    sinon.spy(console, 'log');
  });

  afterEach('restore console.log', () => {
    sinon.restore();
  });
  sendPaymentRequestToApi(100, 20);

  it('verify log of sendRequestToApi(100, 20) is The total is: 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });

  it('verify log of sendRequestToApi(10, 10) is The total is: 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
    expect(console.log.calledOnce).to.be.true;
  });
});
