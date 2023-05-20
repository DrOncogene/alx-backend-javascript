const getPaymentTokenFromAPI = require('./6-payment_token.js');
const mocha = require('mocha');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
	it('tests the return of getPaymentTokenFromAPI(true)', (done) => {
		getPaymentTokenFromAPI(true)
			.then(dataObj => {
				expect(dataObj).to.haveOwnProperty('data');
				expect(dataObj.data).to.be.equal('Successful response from the API');
				done();
			})
			.catch(err => done(err));
	});
});
