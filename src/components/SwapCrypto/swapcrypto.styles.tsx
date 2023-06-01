import styled from "styled-components";

export const SwapCryptoWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 24px;

	@media screen and (max-width: 375px) {
		flex-direction: column;
	}

	& > div {
		flex: 50%;
		display: flex;
		flex-direction: column;
		row-gap: 8px;

		& > div:nth-child(1) {
			display: flex;
			justify-content: space-between;
			align-items: end;
		}

		& > div:nth-child(2) {
			height: 64px;

			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 10px;

			padding: 16px 20px;

			border: 2px solid #202025;
			border-radius: 4px;
		}
	}
`;

export const Label = styled.span`
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;

	letter-spacing: -0.01em;

	color: #555555;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 100%;
	background: transparent;

	border: none;

	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #010101;

	&:focus {
		outline: none;
	}
`;
