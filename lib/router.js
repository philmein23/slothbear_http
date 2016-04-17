const Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'PUT': {},
    'POST': {},
    'PATCH': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(routeActual, callBack) {
  this.routes.GET[routeActual] = callBack;
  return this;
};

Router.prototype.put = function(routeActual, callBack) {
  this.routes.PUT[routeActual] = callBack;
  return this;
};

Router.prototype.post = function(routeActual, callBack) {
  this.routes.POST[routeActual] = callBack;
  return this;
};

Router.prototype.patch = function(routeActual, callBack) {
  this.routes.PATCH[routeActual] = callBack;
  return this;
};

Router.prototype.delete = function(routeActual, callBack) {
  this.routes.DELETE[routeActual] = callBack;
  return this;
};

Router.prototype.route = function() {
  var routes = this.routes;
  return function(req, res) {
    if (typeof routes[req.method][req.url] === 'function') {
      return routes[req.method][req.url](req, res);
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('path not found');
    res.end();
  };
};
