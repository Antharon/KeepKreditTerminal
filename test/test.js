const spawn = require('child_process').spawn;
const request = require('request');

beforeEach(function () {
  return new Promise(function (resolve, reject) {
    spawn('npm', ['start']);
    setTimeout(resolve, 1000);
  });
});

describe('Backend -', function () {
  describe('Server is running -', function () {
    it('root should return 200', function (done) {
      request.get('http://localhost:3000/', function (error, response, body) {
        if (response && response.statusCode === 200) {
          done();
        } else {
          done('Backend server is not working properly');
        }
      });
    });
  });

  describe('User -', () => {
    it('logs in', (done) => {
      request.post('http://localhost:3000/login', {
        username: 'admin',
        password: 'root'
      }, function (error, response, body) {
        if (response && response.statusCode === 200) {
          done();
        } else {
          done('This login shloud be working');
        }
      });
    });
  });
});
