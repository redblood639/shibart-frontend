import styled from "styled-components";

export const CardWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: start;
	padding: 80px 60px;
	row-gap: 40px;
	background: #f7fbfa;
	cursor: pointer;
	box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.1);
	:hover {
		box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.5);
	}

	@media screen and (max-width: 1024px) {
		padding: 40px 24px;
	}
`;

export const Title = styled.span`
	font-weight: 800;
	font-size: 32px;
	line-height: 40px;

	letter-spacing: -0.02em;

	padding-bottom: 80px;

	color: #202025;
`;

export const Label = styled.span`
	font-weight: 500;
	font-size: 20px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const Number = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px;
	gap: 10px;

	width: 60px;
	height: 50px;

	background: #8c7662;
	border-radius: 4px;

	& > span {
		font-weight: 800;
		font-size: 32px;
		line-height: 40px;

		letter-spacing: -0.02em;

		color: #f7fbfa;
	}
`;
