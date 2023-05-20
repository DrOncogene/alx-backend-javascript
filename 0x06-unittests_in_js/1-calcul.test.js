const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('test addition', () => {
        it('test (SUM, 0.4, 2.2) = 2', () => {
            assert.equal(calculateNumber('SUM', 0.4, 2.2), 2);
        });
        it('test (SUM, 0.5, 2.5) = 4', () => {
            assert.equal(calculateNumber('SUM', 0.5, 2.5), 4);
        });
        it('test (SUM, 0.4, 2.5) = 3', () => {
            assert.equal(calculateNumber('SUM', 0.4, 2.5), 3);
        });
        it('test (SUM, 3, 2) = 5', () => {
            assert.equal(calculateNumber('SUM', 3, 2), 5);
        });
    });
    describe('test subtraction', () => {
        it('test (SUBTRACT, 0.4, 2.2) = -2', () => {
            assert.equal(calculateNumber('SUBTRACT', 0.4, 2.2), -2);
        });
        it('test (SUBTRACT, 0.5, 2.5) = -2', () => {
            assert.equal(calculateNumber('SUBTRACT', 0.5, 2.5), -2);
        });
        it('test (SUBTRACT, 10.4, 6.6) = 3', () => {
            assert.equal(calculateNumber('SUBTRACT', 10.4, 6.6), 3);
        });
        it('test (SUBTRACT, 3, 2) = 1', () => {
            assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
        });
    });
    describe('test division', () => {
        it('test (DIVIDE, 4.4, 2.2) = 2', () => {
            assert.equal(calculateNumber('DIVIDE', 4.4, 2.2), 2);
        });
        it('test (DIVIDE, 11.8, 2.5) = 4', () => {
            assert.equal(calculateNumber('DIVIDE', 11.8, 2.5), 4);
        });
        it('test (DIVIDE, 10, 4) = 2.5', () => {
            assert.equal(calculateNumber('DIVIDE', 10, 4), 2.5);
        });
        it('test (DIVIDE, 3, 10) = 0.3', () => {
            assert.equal(calculateNumber('DIVIDE', 3, 10), 0.3);
        });
        it('test (DIVIDE, 3, 0) = Error', () => {
            assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
        });
    });
});
