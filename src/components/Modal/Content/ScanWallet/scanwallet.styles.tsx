import styled from "styled-components";

export const ScanWalletWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 20px;

	row-gap: 20px;
`;

export const NoWallet = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-content: center;

	background: rgba(59, 59, 63, 0.5);
	border-radius: 12px;
	padding: 12px 16px;
`;

export const HeadLabel = styled.span`
	font-weight: 800;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: -0.02em;
	color: #f7fbfa;
`;

export const Label = styled.span`
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	letter-spacing: -0.02em;

	color: #e1e2e2;
`;

export const ScanImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BackButton = styled.div`
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;
