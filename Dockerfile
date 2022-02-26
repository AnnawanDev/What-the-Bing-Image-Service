# Ed Wied
# Feb 23, 2022
# CS361 - Final Project - What the Bing?! Image Service

FROM node:alpine

# creating app directory
WORKDIR /usr/src/app

# install app and dependencies
COPY package.json ./
RUN npm install
COPY . .

# set up port
ENV PORT=4000
EXPOSE ${PORT}

# start application
# todo - switch to forever
CMD ["npm", "start"]
# CMD ["npm", "startProd"]
