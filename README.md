# What the Bing? Image Service
This is the image service for the "What the Bing?" Game

## How to run
* Build and Run: `npm run start`
* Build and Run in Debug (nodemon): `npm run dev`


## Environment file
This micro-service makes use of the Bing Image API.  The API key is saved in a
`.env` file that is not saved to this project.  This project uses the [dotenv](https://www.npmjs.com/package/dotenv) NPM package in order to separate out the saving of configuration from app code. Recreating the `.env` would look like,

```
BING_IMAGE_API_KEY={some api key}
```

## What the Bing?
Long ago there was a Flash game that I thought was really inventive.  It was developed by Grant Skinner and was called “Guess the Google”.  The user was presented with 9 images and they had to guess what search term was used that resulted in the images.  If they got it right, then they were presented with a new batch of images to guess.  If they got it wrong, they had to keep guessing as time allowed.  I thought I would try to recreate this game as best I can.
