const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
	res.send('help page');
});

app.get('/about', (req, res) => {
	res.send('<h1>about</h1>');
});

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'aas',
		location: 'aadsf',
	});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
