# infoscribe-www README

This is an in-development release of the InfoScribe website.

It is written in node.js (with Express and JavaScript templates) and uses mongodb for backend storage.

## Overview

### Models, Routes & Views

* Models are stored in the ./models/ directory.

* Routes (aka Controllers) are defined in server.js, with the logic for individual routes in ./routes/ directory.

* Views are stored in the ./views/ directory.

The templates use EJS (Embedded JavaScript), allowing the same templates to be used on the both the server and client and plain JavaScript to be used throughout the project.

### CSS & JavaScript

CSS is auto-generated from .less files in the ./public/css/ directory automatically any time it is changed (simply refresh the page to view changes).

JavaScript files are loaded in a similar way to CSS files, with auto-minification and version control when deployed in production.

See ./views/layout.ejs for an example of the markup for including CSS or JS files.

### API Documentation

A future release will feature API documentation.

## Acknowledgments

This projects contains portions of code from the hackathon-starter project, incorporated under the MIT License by by Sahat Yalkabov.

License
-------

The MIT License (MIT)

Copyright (c) 2014 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.