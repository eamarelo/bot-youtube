const request = require('request');
const appCredentials = {
	"id_client" : "98cc4890-9c5b-4a9c-b2d9-3c9fdf7c4c18",
	"secret"    : "C1yD0eY7sT2yL8sJ4yR4tX5fW7eP7tV1dC6qA7fX4aU1gQ8oX8"
};

var options = {
	method: 'GET',
	url: 'https://api.fr.carrefour.io/v1/openapi/stores',
	qs: {
		longitude: message[1],
		latitude: message[0],
		radius: '5000'
	},
	headers:{
		accept: 'application/json',
		'x-ibm-client-secret': appCredentials.secret,
		'x-ibm-client-id':  appCredentials.id_client
	} 
};

module.exports = class Botcarefour {
	constructor (lng, lat) {
		this.lng = lng;
		this.lat = lat;
	}

	init(){
		var options = {
			method: 'GET',
			url: 'https://api.fr.carrefour.io/v1/openapi/stores',
			qs: {
				longitude: message[1],
				latitude: message[0],
				radius: '5000'
			},
			headers:{
				accept: 'application/json',
				'x-ibm-client-secret': appCredentials.secret,
				'x-ibm-client-id':  appCredentials.id_client
			} 
		};

		request(options, function (error, response, body) {
			if (error) return  console.error('Failed: %s', error.message);

			else {
				console.log('succes')
				const json = JSON.parse(body);
				for(var k=0; k < json.list.length; k++){
					socket.emit('messageCarrefour', json.list[k]);
				}   
			}
		});
	}
}

