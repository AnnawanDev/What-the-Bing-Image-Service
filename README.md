# What the Bing Image Service
This is part of my final project for CS361.  It's an image service that supports my
"What the Bing?!" game by supplying an endpoint to query the Bing Image API.  It's also used
to power two of my teammate micro-service projects.  This micro-service is used in
conjunction with the [What the Bing UI service](https://github.com/AnnawanDev/What-the-Bing-UI-service) and the What the Bing Noun Importer Service.


## Set-up
### Environment File
This micro-service makes use of the Bing Image API.  The API key is saved in a
`.env` file that is not saved to this project.  This project uses the [dotenv](https://www.npmjs.com/package/dotenv) NPM package in order to separate out the saving of configuration from app code. Recreating the `.env` would look like,

```
BING_IMAGE_API_KEY={some api key}
```

### Install NPM dependencies
Install NPM dependencies with,
```
npm ci
```

### Config file
In `src/utilities/config.js` there is a configuration file for running the project
* `ENABLE_LOGGING` - if set to true, will output console.log to console
* `RUNNING_LOCAL` - used to set environment setup based on whether running local or not
* `BING_SEARCH_API` - API endpoint for Bing Image Search
* `MAX_NUMBER_IMAGES` - max number of images Bing Search API should retrieve
* `LOCAL_PORT` - port number when running locally
* `OSU_PORT` - port number when running at OSU


## How to run
### Local
* Build and Run: `npm run start`
* Build and Run in Debug (nodemon): `npm run dev`

### Production @ OSU
* Build and Run with Forever: `npm run startProd`
* Stop Forever Production Run: `npm run stopProd`


## Querying Service
```
/images/:searchTerm/:numberOfImages
```
* Search term can be any word, but must be greater than 2 characters
* "Safe search" is on to return family friendly results
* A max of 15 images can be returned
* Number of images must be a valid integer greater than 0

### Example URL call
```
localhost:4000/images/chess/5
```

### Example return
```
{
    "imagePath0": "https://images.chesscomfiles.com/uploads/v1/blog/443010.1e3e293f.5000x5000o.2f38f3b00ff6.jpeg",
    "imagePath1": "https://richgames.xyz/assets/makruk.jpg",
    "imagePath2": "https://aptoscommunitynews.org/wp-content/uploads/2015/05/canstockphoto1941342.jpg",
    "imagePath3": "https://www.thesprucecrafts.com/thmb/SQLuChpeD-Mxmd9uOVWJZbIf7Co=/2119x1415/filters:fill(auto,1)/GettyImages-918789286-24ee5f320f524f26b9adcb9e895b0600.jpg",
    "imagePath4": "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/QtoQlevel3/phpmXCTtm.jpeg"
}
```


## Bing Image API
* Bing Image API found at https://www.microsoft.com/en-us/bing/apis/bing-image-search-api
* Bing Image API v7 documentation found at https://docs.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-images-api-v7-reference


## Sequence Diagram - How a game is started
![How a game is started](./How-a-game-is-started.png)


## What the Bing?! Microservices
* [UI Service](https://github.com/AnnawanDev/What-the-Bing-UI-service)
* [Image Service](https://github.com/AnnawanDev/What-the-Bing-Image-Service)
* [Noun Service](https://github.com/AnnawanDev/What-the-Bing-noun-importer-service)
