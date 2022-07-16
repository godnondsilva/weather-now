import styled from 'styled-components';

export const ParentContainer = styled.div`
	background-color: ${(props) => props.theme.bodyBackground};
	height: 100%;
	transition: all 0.3s ease-in-out;
`;

export const InnerParentContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Container = styled.div`
	width: 960px;
	max-width: 960px;
	padding: 0 20px 0 20px;
	background-color: ${(props) => props.theme.bodyBackground};
	transition: all 0.3s ease-in-out;
`;
