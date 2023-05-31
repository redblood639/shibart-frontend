import styled from "styled-components";

export const GenerateWrapper = styled.div`
	background: #f1f4f4;

	padding: 95px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Header = styled.h2`
	font-style: normal;
	font-weight: 800;
	font-size: 72px;
	line-height: 96px;

	text-align: center;

	color: #3c2c2d;
`;

export const Label = styled.span`
	display: block;

	font-family: "Inter";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 32px;

	text-align: center;
	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const CreateButton = styled.div`
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
		font-style: normal;
		font-weight: 800;
		font-size: 12px;
		line-height: 24px;

		letter-spacing: 0.17em;
		text-transform: uppercase;

		color: #f7fbfa;
	}
`;
