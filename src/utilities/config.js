/*
  Ed Wied
  January 15, 2022
  CS 361 Final Project - What the Bing?!
*/

//global contants used for configuration
//pattern for sharing constants used from https://stackoverflow.com/questions/8595509/how-do-you-share-constants-in-nodejs-modules

module.exports = Object.freeze({
    ENABLE_LOGGING: true,
    RUNNING_LOCAL: true,
    BING_SEARCH_API: 'https://api.bing.microsoft.com/v7.0/images/search/?q=',
    MAX_NUMBER_IMAGES: 15,
    LOCAL_PORT: 4000,
    OSU_PORT: 12789,
    SEND_BACK_FAKE_DATA: true
});
