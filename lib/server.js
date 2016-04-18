const http = require('http');
const Router = require(__dirname + '/router.js');

var slothbear = module.exports = exports = {};

slothbear.server = function(port) {
  return slothbear.slothbearServer = http.createServer(this.router.route()).listen(port, () => {
    console.log('Server up on port ' + port);
  });
};

slothbear.close = function() {
  return slothbear.slothbearServer.close();
};

slothbear.router = new Router();
