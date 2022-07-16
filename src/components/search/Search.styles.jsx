import styled from 'styled-components';

export const SearchContatiner = styled.div`
	div {
		background-color: ${(props) => props.theme.backgroundColor};
		border-color: ${(props) => props.theme.backgroundColor};
		color: ${(props) => props.theme.textColor};
		transition: all 0.3s ease-in-out;
	}

	#react-select-3-placeholder {
		position: absolute;
		color: ${(props) => props.theme.textColorSecondary};
		transition: all 0.3s ease-in-out;
	}

	div > div {
		position: static;
	}

	div > div > div[data-value] {
		position: absolute;
		left: 0px;
		color: ${(props) => props.theme.textColor};
		transition: all 0.3s ease-in-out;
	}

	#react-select-3-input {
		position: absolute;
		left: 10px;
	}
`;
