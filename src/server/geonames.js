const fetch = require('cross-fetch');
require('dotenv').config();

async function APIResponse(params) {
	const response = await fetch(`http://api.geonames.org/searchJSON?username=${process.env.geonamesUsername}&featureClass=P&`+params);
	const json = {
		status: response.status,
		body: await response.json()
	};
	return json;
}
module.exports = APIResponse;