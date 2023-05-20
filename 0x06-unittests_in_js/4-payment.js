const utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const res = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
}

module.exports = sendPaymentRequestToApi;
