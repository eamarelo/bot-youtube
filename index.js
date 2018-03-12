const request = require('request');
const appCredentials = {
	"id_client" : "98cc4890-9c5b-4a9c-b2d9-3c9fdf7c4c18",
	"secret"    : "C1yD0eY7sT2yL8sJ4yR4tX5fW7eP7tV1dC6qA7fX4aU1gQ8oX8"
};

module.exports = class BotYoutube {
	constructor (keyword) {
		this.keyword = keyword;
	}

	init(callback){
		console.log(this.keyword)
		var options = {
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + this.keyword + '&key=AIzaSyBHUsxQvMVXD95PK5ewUz6xw7ZCes2QnIk',
			headers:{
				accept: 'application/json',
			} 
		};

		request(options, (error, response, body) => {
			if (error) return  console.error('Failed: %s', error.message);

			else {
				console.log('succes '+ body);
				callback(body);
				return body;
			}
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
	getIdVideo (i) {
		return this.json.items[i].id.videoId;
	}
}

