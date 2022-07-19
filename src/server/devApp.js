const GeoResponse = require('./geonames.js');
const currentWeatherResponse = require('./weatherbitCurrent.js');
const futureWeatherResponse = require('./WeatherbitFuture.js');

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('../../webpack.dev.js');
const compiler = webpack(config);

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	})
);
app.use(webpackHotMiddleware(compiler));

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