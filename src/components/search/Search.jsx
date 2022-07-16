import { useContext } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { SearchContext } from '../../contexts/searchContext';
import { WeatherContext } from '../../contexts/weatherContext';
import {
	GEODB_CITIES_URL,
	geoDbCitiesApiOptions,
	WEATHER_API_URL,
} from '../../utils/api';

import { SearchContatiner } from './Search.styles.jsx';

const Search = () => {
	const { searchData, setSearchData } = useContext(SearchContext);
	const { setWeatherCard, setWeatherForecast } = useContext(WeatherContext);

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEODB_CITIES_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
			geoDbCitiesApiOptions,
		)
			.then((res) => res.json())
			.then((json) => {
				return {
					options: json.data.map((city) => {
						return {
							label: `${city.name}, ${city.countryCode}`,
							value: `${city.latitude} ${city.longitude}`,
						};
					}),
				};
			})
			.catch((err) => console.error('error:' + err));
	};

	const handleChange = (inputValue) => {
		setSearchData(inputValue);
		const [lat, lon] = inputValue.value.split(' ');

		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
		);
		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
		);

		Promise.all([currentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forcastResponse = await response[1].json();

				const forecastDays = forcastResponse.list.splice(0, 7);

				setWeatherCard({
					city: inputValue.label,
					...weatherResponse,
				});
				setWeatherForecast({
					city: inputValue.label,
					...forcastResponse,
					list: forecastDays,
				});
			})
			.catch(console.log);
	};

	return (
		<SearchContatiner
			as={AsyncPaginate}
			placeholder='Search for a city'
			debounceTimeout={1000}
			value={searchData}
			onChange={handleChange}
			loadOptions={loadOptions}
		/>
	);
};

export default Search;
