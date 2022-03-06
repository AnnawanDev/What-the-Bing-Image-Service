/*
  Ed Wied
  January 15, 2022
  CS 361 Final Project - What the Bing?!
*/


// set-up required modules -----------------------------------------------------
const express = require('express');
const axios = require('axios');
let cors = require('cors');
require('dotenv').config();
const { logIt, validateImageSearchInput } = require('./utilities/helperFunctions.js');
const { BING_SEARCH_API, MAX_NUMBER_IMAGES, RUNNING_LOCAL, LOCAL_PORT, OSU_PORT } = require('./utilities/config.js');

// set-up Express --------------------------------------------------------------
const app = express();
const port = RUNNING_LOCAL ? LOCAL_PORT : OSU_PORT;

//add Access-Control-Allow-Origin header so that API call is not blocked by CORS
app.use(cors({
    origin: '*'
}));

//default endpoint on root - used to verify service is up
app.get('/', (req, res) => {
  res.status(200).send("Team Raccoon Image Service");
});

// image search endpoint - returns back Bing API search result if valid
//search term and number of images passed in; otherwise, returns error message
app.get('/images/:searchTerm/:numberOfImages', (req, res) => {
  let searchTerm = req.params.searchTerm;
  let numberOfImages = req.params.numberOfImages;
  let validateObject = validateImageSearchInput(numberOfImages, searchTerm);

  if (!validateObject.goodUserInput) {
    res.status(validateObject.errorCode).send(validateObject.errorMessage);
  } else {
    let bingURL = BING_SEARCH_API + searchTerm + "&count=" + numberOfImages + "&safeSearch=strict";
    makeBingAPIcall(bingURL, numberOfImages, res);
  }
});


//return 404 on anything else not found ----------------------------------------
app.get('*', (req, res) => {
  res.status(404).send("Hmmmm.... couldn't find that");
});


// start-up Express  -----------------------------------------------------------
app.listen(port, () => {
  logIt("Team Raccoon Image Service has started on port " + port);
});


// API support functions  ------------------------------------------------------
//function that actually makes call to Bing Image API
function makeBingAPIcall(bingURL, numberOfImages, res) {
  axios.get(bingURL, {
    headers: { 'Ocp-Apim-Subscription-Key' : process.env.BING_IMAGE_API_KEY }
  })
  .then(function (response) {
    let context = {};

    for (let i=0; i < numberOfImages; i++) {
      context["imagePath" + i] = response.data.value[i].contentUrl;
    }

    res.status(200).send(context);
  })
  .catch(function (error) {
    logIt("ERROR calling /images/:searchTerm/:numberOfImages: " + error);
    res.status(500).send(error);
  })
}
