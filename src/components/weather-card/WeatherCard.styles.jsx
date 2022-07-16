import styled, { keyframes } from 'styled-components';

const Gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
`;

export const Weather = styled.div`
	border-radius: 6px;
	box-shadow: 10px -2px 20px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #034591, #23d5ab);
	background-size: 400% 400%;
	animation: ${Gradient} 6s ease infinite;
	margin: 20px 0;
	padding: 0 20px 0 20px;

	@media screen and (max-width: 768px) {
		padding: 0 20px 20px 20px;
	}
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const City = styled.p`
	font-weight: 600;
	font-size: 18px;
	line-height: 1;
	margin: 0;
	letter-spacing: 1px;
`;

export const WeatherDescription = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 1;
	margin: 0;
`;
export const WeatherIcon = styled.img`
	width: 100px;
`;
export const Temperature = styled.p`
	font-weight: 600;
	font-size: 70px;
	width: auto;
	margin: 10px 0;

	@media screen and (max-width: 768px) {
		font-size: 50px;
	}
`;
export const Details = styled.div`
	width: 20%;
	padding-left: 20px;

	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;
export const DetailRow = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const DetailTitle = styled.span`
	font-size: 10px;
	color: #ccc;
`;
export const DetailLabel = styled.span`
	text-align: left;
	font-weight: 400;
	font-size: 12px;
`;

export const DetailValue = styled.span`
	text-align: right;
	font-weight: 600;
	font-size: 12px;
`;
