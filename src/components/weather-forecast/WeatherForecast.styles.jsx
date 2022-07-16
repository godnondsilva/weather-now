import styled from 'styled-components';

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.span`
	font-size: 23px;
	font-weight: 700;
	color: ${(props) => props.theme.textColor};
	transition: all 0.3s ease-in-out;
`;

export const ResetButton = styled.button`
	border: none;
	color: ${(props) => props.theme.textColor};
	transition: all 0.3s ease-in-out;
	background-color: transparent;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`;

export const DailyItem = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
	border-radius: 6px;
	height: 40px;
	margin: 5px 0;
	align-items: center;
	cursor: pointer;
	display: flex;
	font-size: 14px;
	padding: 5px 20px;
	transition: all 0.3s ease-in-out;
`;

export const IconSmall = styled.img`
	width: 40px;
`;

export const Day = styled.span`
	cursor: inherit;
	color: ${(props) => props.theme.textColor};
	flex: 1 1;
	font-weight: 600;
	margin-left: 15px;
	transition: all 0.3s ease-in-out;
`;

export const Description = styled.span`
	cursor: inherit;
	margin-right: 15px;
	text-align: right;
	color: ${(props) => props.theme.textColorSecondary};
	transition: all 0.3s ease-in-out;
`;

export const MinMax = styled.span`
	color: ${(props) => props.theme.textColorSecondary};
	transition: all 0.3s ease-in-out;
`;

export const DailyDetailsGrid = styled.div`
	grid-row-gap: 0;
	grid-column-gap: 15px;
	column-gap: 15px;
	display: grid;
	grid-template-columns: auto auto;
	padding: 5px 15px;
`;

export const DailyDetailsGridItem = styled.div`
	align-items: center;
	display: flex;
	height: 30px;
	justify-content: space-between;
	color: ${(props) => props.theme.textColor};
	transition: all 0.3s ease-in-out;
`;
