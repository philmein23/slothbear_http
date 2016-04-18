### Slothbear-HTTP

A framework that comprises of a server/router combination that is built on top of the HTTP server.

### Contents

* Getting Started
* API
* Server
* Router
* Dependencies
* Authors
* License


### Getting Started

'''npm install slothbear-http'''

An example on how you would get a server started on port 3000 with '''GET''' and '''POST''' routes.

'''
const server = require('slothbear-express');

server.router
  .get('/', (req, res) => res.write('Hello World'))
  .post('/sloth/bear', (req, res) => {
    res.write('Successfully posted' + )
    });

server.server(3000);
'''


### API

## Server
## slothbear.server(port)

This method takes in the port number as an argument and returns the initialization
of an HTTP server listening in to the port number.

` slothbear.start(3000) `

## slothbear.router = new Router()

Constructor for the router object. Must be called with the ```new``` keyword

' slothbear.router = new Router()'

### Router

## router.get(path, callback(req, res

Adds a '''GET''' route that handles requests with the passed-in callback. Returns the router to allow for method chaining.

''' router.get('/index', (req, res) => {
      res.write('Hello World');
  }) '''

## router.post(path, callback(req, res))

Adds a '''POST''' route that handles requests with the passed-in callback. Return the router to allow for method chaining.

## router.put(path, callback(req, res))

Adds a '''POST''' route that handles requests with the passed-in callback. Return the router to allow for method chaining.

## router.patch(path, callback(req, res))

Adds a '''POST''' route that handles requests with the passed-in callback. Return the router to allow for method chaining.

### router.route(req, res)

This is the method the server should call when a request is made. It routes the the request to the routing object using the '''method''' and '''url''' properties of the ''req''' object and runs the callback.

### router.routes

Object that contains the routing methods. Here is an example of how the code would be represented in the Getting Started section.

'''
{
  'GET': {
    '/': (req, res) => res.write('Hello World')
  },
  'POST': {req, res) => {
    res.write('Success in posting ' + JSON.stringify(req.body));
  },
  'PUT': {},
  'PATCH': {},
  'DELETE': {},
  '404': (req, res) => req.write('404 Not Found');

}
'''

### Dependencies

'''
"devDependencies": {
  "chai": "^3.5.0",
  "chai-http": "^2.0.1",
  "eslint": "^2.8.0",
  "gulp": "^3.9.1",
  "gulp-eslint": "^2.0.0",
  "gulp-mocha": "^2.2.0",
  "mocha": "^2.4.5"
  }
  '''

### Authors
This framework was written by Benjamin Harding, Greg Madgsick, and Phillip Nguyen for the Javascript 401 course at Code Fellows.

### License
This project is licensed under the terms of the MIT license.
