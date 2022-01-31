# Team Raccoon Image Service
This is an image service that queries the Bing Image API.


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


## How to run
### Local
* Build and Run: `npm run start`
* Build and Run in Debug (nodemon): `npm run dev`

### Production
* Build and Run with Forever: `npm run prod`
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
localhost:4000/images/chess/1
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
