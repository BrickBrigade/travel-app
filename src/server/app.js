const express = require('express');
const GeoResponse = require('./geonames.js');
const WeatherResponse = require('./weatherbit.js');

const app = express();

app.use(express.static('dist'));

app.get('/api/geo', async function (req, res) {
	const response = await GeoResponse(req.query.paramstring);
	res.json(response.body);
});

app.get('/api/weather', async function (req, res) {
	const response = await WeatherResponse(req.query.locationCoords);
	res.json(response.body);
});


module.exports = app;