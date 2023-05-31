import styled from "styled-components";

export const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 15px;

	background: #3c2c2d;
	border-radius: 4px;
	flex: 25%;
`;

export const BigLabel = styled.span`
	font-weight: 800;
	font-size: 48px;
	line-height: 48px;

	letter-spacing: -0.02em;

	color: #f7fbfa;
`;

export const SmallLabel = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;

	letter-spacing: -0.02em;

	color: #f8caa0;
`;
