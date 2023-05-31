import styled from "styled-components";

export const GenerateWrapper = styled.div`
	background: #f1f4f4;

	padding: 95px;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	@media screen and (max-width: 375px) {
		padding: 24px;
		text-align: left;
		row-gap: 32px;
	}
`;

export const Header = styled.h2`
	font-weight: 800;
	font-size: 72px;
	line-height: 96px;

	color: #3c2c2d;

	@media screen and (max-width: 375px) {
		font-size: 48px;
		line-height: 56px;

		letter-spacing: -0.02em;

		color: #202025;
	}
`;

export const Label = styled.span`
	display: block;

	font-weight: 500;
	font-size: 20px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #686a6c;

	@media screen and (max-width: 375px) {
		font-size: 16px;
		line-height: 24px;
	}
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
		font-weight: 800;
		font-size: 12px;
		line-height: 24px;

		letter-spacing: 0.17em;
		text-transform: uppercase;

		color: #f7fbfa;
	}
`;
