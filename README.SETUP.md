# infoscribe-www Setup Instructions

## Dependencies

The dependancies for this project are:

* node.js
* mongodb

### On Debian

    apt-get install node node-legacy mongodb-server
    curl -l http://www.npmjs.com/install.sh

### On Mac OS X (using homebrew)

    brew install nodejs mongodb

If you don't have homebrew installed, the command to install it is:

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    
    
## Setup

To get setup just clone the repo and run `npm install` to install dependancies.

    git clone https://github.com/InfoScribe/infoscribe-www.git
    cd infoscribe-www
    npm install

## How to run the server

To start the server, simply use NPM, as you would to start any node.js service:

    npm start

This will start a server on http://localhost:3000

To run the service in the background permemently on a specific port (e.g. on a test server) you can specify a port and use nohup (and specify '&' at the end to background the task).

    PORT=80 nohup npm start &

NB: If you do this you'll need to use something 'ps auxw | grep node' to find and stop the service.