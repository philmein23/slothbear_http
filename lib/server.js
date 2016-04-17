const http = require('http');
const Router = require(__dirname + '/router.js');

var slothbear = module.exports = exports = {};

slothbear.server = function(port) {
  return http.createServer(this.router.route()).listen(port, () => {
    console.log('Server up on port ' + port);
  });
};

slothbear.router = new Router();
