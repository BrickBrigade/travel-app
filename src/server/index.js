const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/main.bundle.html'));
});

app.listen(3000, () => {
	console.log('Listening on localhost:3000');
});