const request = require('request');

const apiKey = process.env.DARK_SKY_API_KEY;

const forecast = ({ lat, long, locationName }, callback) => {
	const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}?units=si`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service.');
		} else if (body.error) {
			callback(`{body.code} - ${body.error}`);
		} else {
			const { summary: description } = body.daily.data[0];
			const { temperature, precipProbability } = body.currently;
			callback(
				undefined,
				`${locationName} - ${description} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`,
			);
		}
	});
};

module.exports = forecast;
