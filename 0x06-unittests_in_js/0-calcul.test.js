const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    describe('test whether the numbers to CalculateNumber are rounded properly', () => {
        it('test 0.4 + 2.2 = 2', () => {
            assert.equal(calculateNumber(0.4, 2.2), 2);
        });
        it('test 0.5 + 2.5 = 4', () => {
            assert.equal(calculateNumber(0.5, 2.5), 4);
        });
        it('test 0.4 + 2.5 = 3', () => {
            assert.equal(calculateNumber(0.4, 2.5), 3);
        });
        it('test 3 + 2 = 5', () => {
            assert.equal(calculateNumber(3, 2), 5);
        });
    });
});
