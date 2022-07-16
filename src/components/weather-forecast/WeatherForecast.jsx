import { useContext } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion';
import { SearchContext } from '../../contexts/searchContext';
import { WeatherContext } from '../../contexts/weatherContext';

import {
	Title,
	DailyItem,
	IconSmall,
	Day,
	Description,
	MinMax,
	DailyDetailsGrid,
	DailyDetailsGridItem,
	TitleContainer,
	ResetButton,
} from './WeatherForecast.styles';

const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

const dayInAWeek = new Date().getDay();
const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
	WEEK_DAYS.slice(0, dayInAWeek),
);

const Forecast = ({ data }) => {
	const { setWeatherCard, setWeatherForecast } = useContext(WeatherContext);
	const { setSearchData } = useContext(SearchContext);
	const handleReset = () => {
		setWeatherCard(null);
		setWeatherForecast(null);
		setSearchData(null);
	};

	return (
		<>
			<TitleContainer>
				<Title>Forecast This Week</Title>
				<ResetButton onClick={handleReset}>Reset</ResetButton>
			</TitleContainer>
			<Accordion allowZeroExpanded>
				{data.list.map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<DailyItem>
									<IconSmall src={`icons/${item.weather[0].icon}.png`} alt='' />
									<Day>{forecastDays[idx]}</Day>
									<Description>{item.weather[0].description}</Description>
									<MinMax>
										{Math.round(item.main.temp_max)}°C /{' '}
										{Math.round(item.main.temp_min)}°C
									</MinMax>
								</DailyItem>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<DailyDetailsGrid>
								<DailyDetailsGridItem>
									<span>Pressure:</span>
									<span>{item.main.pressure}</span>
								</DailyDetailsGridItem>
								<DailyDetailsGridItem>
									<span>Humidity:</span>
									<span>{item.main.humidity}</span>
								</DailyDetailsGridItem>
								<DailyDetailsGridItem>
									<span>Clouds:</span>
									<span>{item.clouds.all}%</span>
								</DailyDetailsGridItem>
								<DailyDetailsGridItem>
									<span>Wind speed:</span>
									<span>{item.wind.speed} m/s</span>
								</DailyDetailsGridItem>
								<DailyDetailsGridItem>
									<span>Sea level:</span>
									<span>{item.main.sea_level}m</span>
								</DailyDetailsGridItem>
								<DailyDetailsGridItem>
									<span>Feels like:</span>
									<span>{item.main.feels_like}°C</span>
								</DailyDetailsGridItem>
							</DailyDetailsGrid>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default Forecast;
