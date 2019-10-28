var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 2 integers and return their sum', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    const result = calculator.runningTotal;
    assert.equal(result, 5)
  })

  it('it should subtract one integer from another and return the value', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    const result = calculator.runningTotal;
    assert.equal(result, 3)
  })

  it('it should multiply 2 integers and return their sum', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    const result = calculator.runningTotal;
    assert.equal(result, 15)
  })

  it('it should divide one integer by another and return the value', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    const result = calculator.runningTotal;
    assert.equal(result, 3)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(2)
    calculator.numberClick(5)
    calculator.numberClick(9)
    const result = calculator.runningTotal;
    assert.equal(result, 259)
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(3)
    const result = calculator.runningTotal;
    assert.equal(result, 3)
  })

  it('it should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 25;
    calculator.previousOperator = '*';
    calculator.clearClick()
    const result = calculator.runningTotal;
    assert.equal(result, 0)
  })

});
