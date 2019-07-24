const request = require('request');

const locationServiceApiKey = process.env.MAPBOX_API_KEY;

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
		address,
	)}.json?access_token=${locationServiceApiKey}`;
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services');
		} else if (body.features.length === 0) {
			callback('unable to find location, please try again.');
		} else {
			const [long, lat] = body.features[0].center;
			const { place_name: locationName } = body.features[0];

			callback(undefined, { locationName, coords: { long, lat } });
		}
	});
};

module.exports = geocode;
