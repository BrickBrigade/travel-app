const app = require('./app');
const port = 3000;

app.listen(port, () => {
	console.log('Listening on localhost:3000');
});

module.exports = port;