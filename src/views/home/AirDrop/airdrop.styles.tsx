import styled from "styled-components";

export const AirDropWrapper = styled.div`
	padding: 150px;

	text-align: center;

	display: flex;
	flex-direction: column;
	row-gap: 64px;
`;

export const Title = styled.h2`
	font-weight: 800;
	font-size: 80px;
	line-height: 80px;

	padding-bottom: 20px;

	letter-spacing: -0.02em;

	color: #3c2c2d;

	& > span {
		color: #f29b4c;
	}
`;

export const Label = styled.span`
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;

	text-align: center;
	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const BuyButton = styled.div`
	margin: auto;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 20px 32px;
	gap: 8px;

	background: #3c2c2d;
	border-radius: 4px;

	& > span {
		font-weight: 800;
		font-size: 12px;
		line-height: 24px;

		letter-spacing: 0.17em;
		text-transform: uppercase;

		color: #f7fbfa;
		white-space: nowrap;
	}
`;

export const CardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 50px;
`;
