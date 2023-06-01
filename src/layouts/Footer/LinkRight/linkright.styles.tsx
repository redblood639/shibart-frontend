import styled from "styled-components";

export const LinkRightWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;

	padding: 42px 150px;

	& > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: start;

		row-gap: 20px;
	}

	& > div:nth-child(2) {
		display: flex;
		align-items: start;

		column-gap: 169px;

		@media screen and (max-width: 610px) {
			column-gap: 80px;
		}

		@media screen and (max-width: 425px) {
			column-gap: 50px;
		}

		& > div {
			display: flex;
			flex-direction: column;
			row-gap: 34px;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		padding: 42px;
		row-gap: 32px;
	}

	@media screen and (max-width: 375px) {
		padding: 24px;
	}
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #3c2c2d;
`;

export const Description = styled.div`
	font-weight: 700;
	font-size: 23px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const MenuItemWrapper = styled.div`
	span {
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;

		letter-spacing: -0.02em;

		color: #686a6c;
	}
`;
