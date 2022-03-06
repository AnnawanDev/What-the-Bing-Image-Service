/*
  Ed Wied
  March 6, 2022
  CS 361 Final Project - What the Bing?!
*/

class ValidateObject {
  constructor() {
    this.errorCode = 0;
    this.errorMessage = "";
    this.goodUserInput = true;
  }

  setError(errorCode, errorMessage) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.goodUserInput = false;
  }
}

module.exports = { ValidateObject }
