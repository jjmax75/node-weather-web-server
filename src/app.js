const path = require('path');

const express = require('express');
const hbs = require('hbs');

const app = express();

// define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars config
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use((req, res, next) => {
	const currentDate = new Date();
	res.locals.year = currentDate.getFullYear();
	next();
});

// setup static directory
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
	res.render('index', {
		pageTitle: 'Weather App - Home page',
		title: 'Weather App',
	});
});

app.get('/about', (req, res) => {
	res.render('about', {
		pageTitle: 'Weather App - About page',
		title: 'About page',
	});
});

app.get('/Help', (req, res) => {
	res.render('Help', {
		pageTitle: 'Weather App - Help page',
		title: 'Help page',
	});
});

app.get('/weather', (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address',
		});
	}

	res.send({
		forecast: 'aas',
		location: req.query.address,
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		pageTitle: 'Weather App - 404 - Help page not found',
		title: 'Help Article Not Found',
	});
});

app.get('*', (req, res) => {
	res.render('404', {
		pageTitle: 'Weather App - 404 - Page not found',
		title: 'Page Not Found',
	});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
