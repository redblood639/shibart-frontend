import styled from "styled-components";

export const BalanceWrappe = styled.div`
	padding: 16px 24px;

	background: #f7fbfa;
	box-shadow: 0px 16px 40px -8px rgba(0, 0, 0, 0.12);
	border-radius: 4px;

	display: flex;
	column-gap: 40px;
	align-items: center;

	@media screen and (max-width: 425px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 24px;
	}

	& > div {
		flex: 25%;
		display: flex;
		flex-direction: column;
		row-gap: 10px;
	}
`;

export const Title = styled.span`
	font-weight: 700;
	font-size: 13px;
	line-height: 14px;

	letter-spacing: -0.01em;

	color: #686a6c;
`;

export const Label = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;

	letter-spacing: -0.02em;

	color: #202025;
`;
