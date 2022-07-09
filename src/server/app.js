const express = require('express');
const APIResponse = require('./geonames.js');

const app = express();

app.use(express.static('dist'));

app.get('/api', async function (req, res) {
	const response = await APIResponse(req.query.paramstring);
	res.json(response.body);
	// console.log(response.body.geonames[0].name)
});


module.exports = app;