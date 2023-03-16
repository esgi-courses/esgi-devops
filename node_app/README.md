# Simple Node.js app

## Files

- node_app/
  - src/index.js      Example Express web server.
  - package.json      Node.js package file, specifies npm dependencies.

## Setup

You need Node.js and Docker installed.

First change to the directory and install dependencies:

```bash
cd node_app
npm install
```

## Directly run

The example Node.js application is just "Hello world", you run it directly like this:

```bash
npm start
```


# Lab : Create & run a docker container

## Step 1 : Create a Dockerfile

Create a Dockerfile in the root of the project. This file will contain the instructions to build the image.

Use the following instructions :
* Use the official node image as a base image : `node:16.13.1`
* Do a production install of the dependencies : `npm install --only=production`
* Expose the port 3000

## Step 2 : Build the image

Build the docker image.

## Step 3 : Run the container

Run the container and check that the application is working properly.
Connect the container to a Volume in order to have persistent logs when you delete and recreate the container :
* Node application logs are stored in the container directory : `/var/log/`
