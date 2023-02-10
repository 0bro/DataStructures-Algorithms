const { describe } = require('node:test');
const RunningSums = require('./RunningSums');

describe('Testing Running Sums', () => {
  // Write a test for calling createErrorResponse()
  test('Test 1: [1,2,3,4]', () => {
    expect(RunningSums([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });

  test('Test 2: [1,1,1,1,1]', () => {
    expect(RunningSums([1,1,1,1,1])).toEqual([1,2,3,4,5]);
  });

  test('Test 2: [3,1,2,10,1]', () => {
    expect(RunningSums([3,1,2,10,1])).toEqual([3,4,6,16,17]);
  });
});
