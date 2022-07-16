import { ThemeProvider } from 'styled-components';

import Header from './components/header/Header';
import Search from './components/search/Search';
import CurrentWeather from './components/weather-card/WeatherCard';
import { useContext } from 'react';
import { WeatherContext } from './contexts/weatherContext';
import { ThemeContext } from './contexts/themeContext';
import Forecast from './components/weather-forecast/WeatherForecast';

import { ParentContainer, Container, InnerParentContainer } from './App.styles';
import { themes } from './data/themeData';

const App = () => {
	const { weatherCard, weatherForecast } = useContext(WeatherContext);
	const { theme: themeValue } = useContext(ThemeContext);

	console.log(weatherForecast);
	return (
		<ThemeProvider theme={themes[themeValue]}>
			<ParentContainer>
				<InnerParentContainer>
					<Container>
						<Header />
						<Search />
						{weatherCard && <CurrentWeather data={weatherCard} />}
						{weatherForecast && <Forecast data={weatherForecast} />}
					</Container>
				</InnerParentContainer>
			</ParentContainer>
		</ThemeProvider>
	);
};

export default App;
