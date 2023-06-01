import styled from "styled-components";

export const ChooseWalletWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding-top: 50px;
	row-gap: 20px;
`;

export const HeadLabel = styled.div`
	font-size: 24px;
	color: #f7fbfa;
	font-weight: 800;
`;

export const Label = styled.span`
	font-size: 14px;
	line-height: 20px;

	letter-spacing: -0.02em;

	color: #e1e2e2;
`;

export const ItemWrapper = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	column-gap: 10px;
	padding: 10px;

	border: 2px solid #202025;
	border-radius: 12px;
	&:hover {
		background: #202025;
	}
`;

export const WalletItems = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 5px;
`;

export const ScanButton = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 10px;
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

export const CloseButton = styled.div`
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
`;
