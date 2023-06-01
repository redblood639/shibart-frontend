import styled from "styled-components";

export const ModalWrapper = styled.div`
	z-index: 90;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
	width: 750px;
	height: 500px;

	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;

	& > div {
		flex: 50%;
	}

	@media screen and (max-width: 425px) {
		flex-direction: column;
		flex: 1;
		width: 90%;
		height: auto;
	}
`;

export const BannerContent = styled.div`
	background: #f8caa0;
	height: 100%;
	padding: 40px 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const MainContent = styled.div`
	background: #010101;
	height: 100%;
	padding: 30px 20px;
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	position: relative;
`;

export const DescWrapper = styled.div`
	& > div {
		display: flex;
		justify-content: space-between;

		margin-bottom: 10px;
	}
`;

export const LogoLabel = styled.p`
	text-transform: uppercase;

	font-weight: 900;
	font-size: 16px;
	line-height: 24px;

	color: #3c2c2d;
`;

export const HeadLabel = styled.p`
	font-weight: 800;
	font-size: 36px;
	line-height: 40px;

	color: #3c2c2d;
`;

export const DescLabel = styled.span`
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;

	letter-spacing: -0.02em;

	color: #8c7662;
`;

export const ArrowButton = styled.div`
	background: #f7fbfa;
	border-radius: 48px;
	width: 64px;
	height: 36px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;
`;
