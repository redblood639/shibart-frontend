import styled from "styled-components";

export const ButtonWrapper = styled.div`
	padding: 12px 32px;
	background: #f7fbfa;
	border: 2px solid #555555;
	text-align: center;
	border-radius: 4px;

	cursor: pointer;
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #202025;
	&:hover {
		color: #555555;
	}
`;
