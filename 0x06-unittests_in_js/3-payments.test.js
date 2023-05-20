const sinon = require('sinon');
const moncha = require('mocha');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payments.js');
const utils = require('./utils.js')

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(utils, 'calculateNumber');
  sendPaymentRequestToApi(100, 20);

  it('checks if Utils.calculateNumber was called once', () => {
    expect(spy.calledOnce).to.be.true;
  });
  it('checks if Utils.calculateNumber was called with (SUM, 100, 20)', () => {
    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
  });

  spy.restore()
});
