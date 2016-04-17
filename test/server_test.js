require('mocha');
require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;

const app = require(__dirname + '/../index.js');

describe('testing server creation', () => {
  before(() => {
    app.router.get('/bear', (req, res) => {
      process.stdout.write('GET route set for /bear');
      res.write('GET route set for /bear');
      res.end();
    });
    app.server(6265);
  });
  it('should respond to GET request to /bear on port 6265', (done) => {
    request('localhost:6265')
      .get('/bear')
      .end((req, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('GET route set for /bear');
        done();
      });
  });
});
