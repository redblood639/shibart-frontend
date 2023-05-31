import styled from "styled-components";

export const CryptoItemWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	gap: 16px;
`;

export const CryptoItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 12px;

	width: 128px;
	height: 56px;

	border: 2px solid #3c2c2d;
	border-radius: 4px;

	& > div:nth-child(2) {
		display: flex;
		flex-direction: column;
	}

	cursor: pointer;

	&:hover {
		background: #ffffff;
		& > div:nth-child(2) {
			& > span {
				color: #202025;
			}
		}
	}
`;

export const SymbolLabel = styled.span`
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;

	letter-spacing: -0.01em;

	color: #8c7662;
`;

export const NetworkLabel = styled.span`
	font-weight: 800;
	font-size: 12px;
	line-height: 16px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #8c7662;
`;
