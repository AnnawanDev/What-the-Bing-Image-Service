/*
  Ed Wied
  January 31, 2022
  CS 361 Final Project - What the Bing?!
*/

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

module.exports = {
  logIt,
  isANumber,
  isProperStringLength,
  isNumberOutsideValidRange
}
