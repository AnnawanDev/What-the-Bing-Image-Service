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
const { logIt, isANumber, isProperStringLength, isNumberOutsideValidRange } = require('./utilities/helperFunctions.js');
const { SEND_BACK_FAKE_DATA, BING_SEARCH_API, MAX_NUMBER_IMAGES, RUNNING_LOCAL, LOCAL_PORT, OSU_PORT } = require('./utilities/config.js');

// set-up Express --------------------------------------------------------------
const app = express();
const port = RUNNING_LOCAL ? LOCAL_PORT : OSU_PORT;

//add Access-Control-Allow-Origin header so that API call is not blocked by CORS
app.use(cors({
    origin: '*'
}));

//set up endpoints
app.get('/', (req, res) => {
  res.status(200).send("Team Raccoon Image Service");
});


app.get('/images/:searchTerm/:numberOfImages', (req, res) => {
  let searchTerm = req.params.searchTerm;
  let numberOfImages = req.params.numberOfImages;
  let goodUserInput = true;
  let errorCode = 0;
  let errorMessage = "";

  //validate user input
  if (!isANumber(numberOfImages)) {
    errorCode = 400;
    errorMessage = "Bad input - you did not send a valid number";
    goodUserInput = false;
  }

  if (!isProperStringLength(searchTerm)) {
    errorCode = 400;
    errorMessage = "Bad input - search term should be greater than 2 characters";
    goodUserInput = false;
  }

  if (isNumberOutsideValidRange(numberOfImages)) {
    errorCode = 400;
    errorMessage = "Bad input - number of images should be at least 1 and less than " + (MAX_NUMBER_IMAGES + 1);
    goodUserInput = false;
  }

  //send back bad response if needed
  if (!goodUserInput) {
    res.status(errorCode).send(errorMessage);
  } else if(SEND_BACK_FAKE_DATA) {
    //send back test data rather than make call to Bing
    let fakeData = { imagePath0: 'http://localhost:3000/images/home-loading/image0.jpg',imagePath1: 'http://localhost:3000/images/home-loading/image1.jpg', imagePath2: 'http://localhost:3000/images/home-loading/image2.jpg', imagePath3: 'http://localhost:3000/images/home-loading/image3.jpg', imagePath4: 'http://localhost:3000/images/home-loading/image4.jpg', imagePath5: 'http://localhost:3000/images/home-loading/image5.jpg', imagePath6: 'http://localhost:3000/images/home-loading/image6.jpg', imagePath7: 'http://localhost:3000/images/home-loading/image7.jpg'};
    res.status(200).send(fakeData);
  } else {
    //everything is good - send back real data
    let bingURL = BING_SEARCH_API + searchTerm + "&count=" + numberOfImages + "&safeSearch=strict";

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
});


//return 404 on anything else not found
app.get('*', (req, res) => {
  res.status(404).send("Hmmmm.... couldn't find that");
});


// start-up Express  -----------------------------------------
app.listen(port, () => {
  logIt("Team Raccoon Image Service has started on port " + port);
});
