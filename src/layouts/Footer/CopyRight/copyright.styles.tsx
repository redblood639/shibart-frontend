import styled from "styled-components";

export const CopyRightWrapper = styled.div`
	height: 104px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	border-top: 1px solid #e1e2e2;

	padding: 42px 150px;

	& > div:nth-child(2) {
		display: flex;
		align-items: center;
		column-gap: 40px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: start;
		row-gap: 16px;

		padding: 24px;
	}
`;

export const Label = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;

	letter-spacing: -0.02em;

	color: #a6aead;
	@media screen and (max-width: 768px) {
		font-size: 12.5px;
	}
`;
