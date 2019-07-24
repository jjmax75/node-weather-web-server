const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const processWeatherRequest = (location, callback) => {
	console.log(location);
	geocode(location, (error, { coords, locationName }) => {
		if (error) {
			return console.log('Error:', error);
		}

		forecast(
			{
				...coords,
				locationName,
			},
			(error, forecastData) => {
				if (error) {
					return console.log('Error:', error);
				}
				callback(forecastData);
			},
		);
	});
};

module.exports = processWeatherRequest;
