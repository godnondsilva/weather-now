import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
`;

export const InnerHeaderContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderTitle = styled.h2`
	color: ${(props) => props.theme.textColor};
	transition: all 0.3s ease-in-out;
`;

export const Logo = styled.img`
	width: 40px;
	height: 40px;
	padding-right: 5px;
`;

export const Switch = styled.label`
	position: relative;
	display: inline-block;
	width: 60px;
	height: 34px;
`;

export const Input = styled.input`
	opacity: 0;
	:checked {
		background-color: #2196f3;
	}

	:focus {
		box-shadow: 0 0 1px #2196f3;
	}
`;

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;

	:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;

		${Input}:checked + & {
			transform: translateX(26px);
		}
	}
	${Input}:checked + & {
		background-color: #2196f3;
	}
`;
