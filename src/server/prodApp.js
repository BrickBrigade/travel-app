const GeoResponse = require('./geonames.js');
const currentWeatherResponse = require('./weatherbitCurrent.js');
const futureWeatherResponse = require('./WeatherbitFuture.js');
const express = require('express');
const app = express();

app.use(express.static('dist'));
app.get('/api/geo', async function (req, res) {
	const response = await GeoResponse(req.query.paramstring);
	res.json(response.body);
});
app.get('/api/weather/current', async function (req, res) {
	const response = await currentWeatherResponse(req.query.locationCoords);
	res.json(response.body);
});
app.get('/api/weather/future', async function (req, res) {
	const response = await futureWeatherResponse(req.query.locationCoords);
	res.json(response.body);
});

module.exports = app;