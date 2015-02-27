# infoscribe-www

An initial commit of the InfoScribe website. This is focussed around getting the templating and scaffolding right and as an exploratory exercise.

Goals include getting the HTML and Bootstrap CSS right, and to look at the Angular and Node.js integration and API endpoints, and how the front end should talk to the backend.

## How to run the server

To start the server, simply use NPM, as you would to start any node.js service:

    npm start

## Next steps

### Making the JavaScript & CSS easier to main 

The next steps will include adding a Bootstrap theme with less/grunt to make the CSS easy to maintain and reducing the number of different CSS files we have.

Bower would help us manage the JavaScript dependancies although I'm mindful of keeping things simple.

### Client/Server design

The plan is to build an API driven service, although I have concerns that maintaining an Angular client application in practice may prove a barrier to other people working on the front end (as there is quite a steep learning curve there) and it might be easier to leverage server side templates.

Am holding off on making a decision about this for now, until we've had a chance to explore and discuss it.