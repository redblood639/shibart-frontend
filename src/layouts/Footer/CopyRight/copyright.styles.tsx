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
		gap: 40px;
	}
`;

export const Label = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	/* identical to box height, or 143% */

	letter-spacing: -0.02em;

	/* Neutral/4 */

	color: #a6aead;
`;
