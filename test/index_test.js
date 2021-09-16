const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
    describe(".factorial", () => {
        it("test if the output 5! is equal to 120", () => {
            const result = Calculate.factorial(5);
            const expected = 120;
            assert.strictEqual(result, expected);
        });
        it("test if the output 5! is not equal to 130", () => {
            const result = Calculate.factorial(5);
            const expected = 130;
            assert.notEqual(result, expected);
        });
        it("test if the output 0! is equal to 1", () => {
            const inputNumber = 0;
            assert.equal(Calculate.factorial(inputNumber), 1);
        });
    });
});
