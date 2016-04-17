const http = require('http');
const Router = require(__dirname + '/router.js');

var slothbear = module.exports = exports = {};

slothbear.server = function(port, routes) {
  return http.createServer(routes).listen(port, () => {
    console.log('Server up on port ' + port);
  });
};

slothbear.router = new Router();
