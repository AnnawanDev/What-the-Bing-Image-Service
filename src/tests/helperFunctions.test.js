/*
  Ed Wied
  February 17, 2022
  CS 361 Final Project - What the Bing?!
*/

const { isANumber, isProperStringLength, isNumberOutsideValidRange } = require('../utilities/helperFunctions.js');
const { MAX_NUMBER_IMAGES } = require('../utilities/config.js');

// ------ testing isANumber ----------------------------------------------------
test('Should be able to verify a number is a number', () => {
  const testNumber = 5;
  const evaluation = isANumber(testNumber);
  expect(evaluation).toBeTruthy();
});

test('Should be able to verify a string is not a number', () => {
  const testNumber = "W";
  const evaluation = isANumber(testNumber);
  expect(evaluation).toBeFalsy();
});

test('Should be able to verify NaN is not a number', () => {
  const testNumber = NaN;
  const evaluation = isANumber(testNumber);
  expect(evaluation).toBeFalsy();
});

test('Should be able to verify mixed number with letter is not a number', () => {
  const testNumber = "1a";
  const evaluation = isANumber(testNumber);
  expect(evaluation).toBeFalsy();
})

// ------ testing isProperStringLength -----------------------------------------
test('String should not be two characters', () => {
  const testString = "IL";
  const evaluation = isProperStringLength(testString);
  expect(evaluation).toBeFalsy();
});

test('String should not be zero characters', () => {
  const testString = "";
  const evaluation = isProperStringLength(testString);
  expect(evaluation).toBeFalsy();
});

test('String should be three or more characters', () => {
  const testString = "cat";
  const evaluation = isProperStringLength(testString);
  expect(evaluation).toBeTruthy();
});

// ------ testing isNumberOutsideValidRange ------------------------------------
test('Number should be within range', () => {
  const testNumber = 1;
  const evaluation = isNumberOutsideValidRange(testNumber);
  expect(evaluation).toBeFalsy();
});

test('Number should not exceed range', () => {
  const testNumber = 16;
  const evaluation = isNumberOutsideValidRange(testNumber); 
  expect(evaluation).toBeTruthy();
});
