import {
	Bottom,
	City,
	DetailLabel,
	DetailRow,
	Details,
	DetailTitle,
	DetailValue,
	Temperature,
	Top,
	Weather,
	WeatherDescription,
	WeatherIcon,
} from './WeatherCard.styles';

const CurrentWeather = ({ data }) => {
	return (
		<Weather>
			<Top>
				<div>
					<City>{data.city}</City>
					<WeatherDescription>{data.weather[0].description}</WeatherDescription>
				</div>
				<WeatherIcon src={`icons/${data.weather[0].icon}.png`} alt='weather' />
			</Top>
			<Bottom>
				<Temperature>{Math.round(data.main.temp)}°C</Temperature>
				<Details>
					<DetailRow>
						<DetailTitle>DETAILS</DetailTitle>
					</DetailRow>
					<DetailRow>
						<DetailLabel>Feels like</DetailLabel>
						<DetailValue>{Math.round(data.main.feels_like)}°C</DetailValue>
					</DetailRow>
					<DetailRow>
						<DetailLabel>Wind</DetailLabel>
						<DetailValue>{data.wind.speed}km/hr</DetailValue>
					</DetailRow>
					<DetailRow>
						<DetailLabel>Humidity</DetailLabel>
						<DetailValue>{data.main.humidity}%</DetailValue>
					</DetailRow>
					<DetailRow>
						<DetailLabel>Pressure</DetailLabel>
						<DetailValue>{data.main.pressure} Pa</DetailValue>
					</DetailRow>
				</Details>
			</Bottom>
		</Weather>
	);
};

export default CurrentWeather;
