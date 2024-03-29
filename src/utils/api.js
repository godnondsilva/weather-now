export const GEODB_CITIES_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoDbCitiesApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${process.env.REACT_APP_GEODB_CITIES_API_KEY}`,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
