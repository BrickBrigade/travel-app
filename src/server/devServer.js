const app = require('./devApp');
const port = 3000;

app.listen(port, () => {
	console.log(`Listening on localhost:${port}`);
});
module.exports = port;