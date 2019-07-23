const path = require('path');

const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About page',
	});
});

app.get('/Help', (req, res) => {
	res.render('Help', {
		title: 'Help page',
	});
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
