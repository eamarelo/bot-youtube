const request = require('request');

module.exports = class BotYoutube {
  constructor (keyword) {
    this.keyword = keyword;
  }

  init (callback) {
    var options = {
      'method': 'GET',
      'url': 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + this.keyword + '&key=AIzaSyBHUsxQvMVXD95PK5ewUz6xw7ZCes2QnIk',
      'headers': {
        'accept': 'application/json'
      }
    };

    request(options, (error, response, body) => {
      if (error) {
        return console.error('Failed: %s', error.message);
      }

      callback(body);
      return body;
    });
  }

  echo () {
    var sync = true;

    this.init(result => {
      this.setJson(result);
      sync = false;
    });
    while (sync) {
      require('deasync').sleep(100);
    }
  }

  setJson (json) {
    this.json = JSON.parse(json);
  }

  getJson () {
    return this.json;
  }
};

