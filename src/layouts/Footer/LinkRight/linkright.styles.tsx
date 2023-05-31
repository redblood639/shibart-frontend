import styled from "styled-components";

export const LinkRightWrapper = styled.div`
	height: 288px;

	display: flex;
	justify-content: space-between;
	align-items: start;

	padding: 42px 100px;

	& > div:nth-child(1) {
		display: flex;
		flex-direction: column;
		align-items: start;

		gap: 20px;
	}

	& > div:nth-child(2) {
		display: flex;
		align-items: start;

		gap: 169px;

		& > div {
			display: flex;
			flex-direction: column;
			gap: 34px;
		}
	}
`;

export const Label = styled.span`
	font-style: normal;
	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #3c2c2d;
`;

export const Description = styled.div`
	font-style: normal;
	font-weight: 700;
	font-size: 23px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const MenuItemWrapper = styled.div`
	span {
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 20px;

		letter-spacing: -0.02em;

		color: #686a6c;
	}
`;
