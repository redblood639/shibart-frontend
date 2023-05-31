import styled from "styled-components";

export const RoadMapWrapper = styled.div`
	display: flex;
	background: #f1f4f4;

	& > div:nth-child(2) {
		flex: 50%;
		padding: 48px;

		display: flex;
		flex-direction: column;

		@media screen and (max-width: 375px) {
			padding: 24px;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ImageWrapper = styled.div`
	flex: 50%;
	position: relative;
	min-height: 560px;

	background: #f8caa0;
	background-image: url("/roadmap.jpg");
	background-size: contain;
	background-repeat: no-repeat;
	background-position: right bottom;
`;

export const Content = styled.div`
	position: absolute;
	left: 150px;
	top: 129px;

	display: flex;
	flex-direction: column;
	row-gap: 40px;

	@media screen and (max-width: 1024px) {
		left: 50px;
		top: 50px;
	}

	@media screen and (max-width: 375px) {
		left: 29px;
		top: 50px;
	}
`;

export const Label = styled.div`
	font-weight: 800;
	font-size: 80px;
	line-height: 80px;

	letter-spacing: -0.02em;

	color: #202025;

	@media screen and (max-width: 1024px) {
		font-size: 60px;
		line-height: 58px;
	}

	@media screen and (max-width: 375px) {
		font-size: 40px;
		line-height: 48px;
	}
`;

export const ArrowButton = styled.div`
	background: #fe6768;
	border-radius: 48px;
	width: 192px;
	height: 72px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	@media screen and (max-width: 375px) {
		width: 117.33px;
		height: 44px;
	}
`;
