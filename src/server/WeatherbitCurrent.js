const fetch = require('cross-fetch');
require('dotenv').config();

async function WeatherResponse(params) {
	const response = await fetch('https://api.weatherbit.io/v2.0/current?'+params+`&key=${process.env.weatherBitKey}`);
	const json = {
		status: response.status,
		body: await response.json()
	};
	return json;
}
module.exports = WeatherResponse;