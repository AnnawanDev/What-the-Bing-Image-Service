/*
  Ed Wied
  January 31, 2022
  CS 361 Final Project - What the Bing?!
*/

const { ValidateObject } = require('./ValidateObject.js');
const { ENABLE_LOGGING, MAX_NUMBER_IMAGES } = require('./config.js');

//common function to log messages to console rather than use console.log for everyone
function logIt(someMessage) {
  if (ENABLE_LOGGING) {
    console.log(someMessage);
  }
}

//function uses a regular expression to determine if number is a valid integer
//regex expression taken from https://www.delftstack.com/howto/javascript/check-if-string-is-number-javascript/
//January 31, 2022
function isANumber(someString) {
  return /^-?\d+$/.test(someString);
}

function isProperStringLength(someString) {
  if (someString.length > 2) {
    return true;
  } else {
    return false;
  }
}

function isNumberOutsideValidRange(someNumber) {
  if (someNumber > MAX_NUMBER_IMAGES || someNumber < 1) {
    return true;
  } else {
    return false;
  }
}

function validateImageSearchInput(numberOfImages, searchTerm) {
  let validateObject = new ValidateObject();

  if (!isANumber(numberOfImages)) {
    validateObject.setError(400, "Bad input - you did not send a valid number");
  }

  if (!isProperStringLength(searchTerm)) {
    validateObject.setError(400, "Bad input - search term should be greater than 2 characters");
  }

  if (isNumberOutsideValidRange(numberOfImages)) {
    validateObject.setError(400, "Bad input - number of images should be at least 1 and less than " + (MAX_NUMBER_IMAGES + 1));
  }

  return validateObject;
}

module.exports = {
  logIt,
  isANumber,
  isProperStringLength,
  isNumberOutsideValidRange,
  validateImageSearchInput
}
