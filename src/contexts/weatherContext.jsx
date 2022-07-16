import { createContext, useState } from 'react';

export const WeatherContext = createContext({
	weatherCard: null,
	setWeatherCard: () => null,
	weatherForecast: null,
	setWeatherForecast: () => null,
});

export const WeatherProvider = ({ children }) => {
	const [weatherCard, setWeatherCard] = useState(null);
	const [weatherForecast, setWeatherForecast] = useState(null);

	const value = {
		weatherCard,
		setWeatherCard,
		weatherForecast,
		setWeatherForecast,
	};

	return (
		<WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
	);
};
