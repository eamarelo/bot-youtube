const request = require('request');
const appCredentials = {
	"id_client" : "98cc4890-9c5b-4a9c-b2d9-3c9fdf7c4c18",
	"secret"    : "C1yD0eY7sT2yL8sJ4yR4tX5fW7eP7tV1dC6qA7fX4aU1gQ8oX8"
}

module.exports = class Botcarefour {
	constructor (lng, lat) {
		this.lng = lng;
		this.lat = lat;
	}