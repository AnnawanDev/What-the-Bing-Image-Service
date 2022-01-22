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

// set-up Express --------------------------------------------------------------
const app = express();
const port = 4000;
app.use(cors({
    origin: '*'
}));

//set up endpoints
app.get('/', (req, res) => {
  res.status(200).send("What the Bing?!");
});

app.get('/images/:searchTerm', (req, res) => {
  let searchTerm = req.params.searchTerm;
  let bingURL = "https://api.bing.microsoft.com/v7.0/images/search/?q=" + searchTerm + "&count=9&safeSearch=strict";
  axios.get(bingURL, {
    headers: { 'Ocp-Apim-Subscription-Key' : process.env.BING_IMAGE_API_KEY }
  })
  .then(function (response) {
    // handle success
    //console.log(response);
    let context = {};
    context.imagePath0 = response.data.value[0].contentUrl;
    context.imagePath1 = response.data.value[1].contentUrl;
    context.imagePath2 = response.data.value[2].contentUrl;
    context.imagePath3 = response.data.value[3].contentUrl;
    context.imagePath4 = response.data.value[4].contentUrl;
    context.imagePath5 = response.data.value[5].contentUrl;
    context.imagePath6 = response.data.value[6].contentUrl;
    context.imagePath7 = response.data.value[7].contentUrl;
    context.imagePath8 = response.data.value[8].contentUrl;
    res.status(200).send(context);
  })
  .catch(function (error) {
    // handle error
    console.log("ERROR: " + error);
    res.status(500).send(error);
  })
});

app.get('*', (req, res) => {
  res.status(404).send("Hmmmm.... couldn't find that");
});


// start-up Express  -----------------------------------------
app.listen(port, () => {
  console.log("What the Bing?! Image Service has started on port " + port);
});
