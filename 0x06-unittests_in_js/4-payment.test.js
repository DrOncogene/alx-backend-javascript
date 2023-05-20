const sinon = require('sinon');
const moncha = require('mocha');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment.js');
const utils = require('./utils.js')

describe('sendPaymentRequestToApi', () => {
  const stub = sinon.stub(utils, 'calculateNumber').returns(10);
  const spy = sinon.spy(console, 'log');
  sendPaymentRequestToApi(100, 20);

  it('checks if Utils.calculateNumber was called once', () => {
    expect(stub.calledOnce).to.be.true;
  });
  it('checks if Utils.calculateNumber was called with (SUM, 100, 20)', () => {
    expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
  });
  it('checks if Utils.calculateNumber always returns 10', () => {
    expect(stub.alwaysReturned(10)).to.be.true;
  });
  it('checks if Utils.calculateNumber always returns 10', () => {
    expect(spy.calledOnceWith('The total is: 10')).to.be.true;
  });

  stub.restore();
  spy.restore();
});
