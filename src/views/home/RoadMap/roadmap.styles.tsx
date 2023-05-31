import styled from "styled-components";

export const RoadMapWrapper = styled.div`
	display: flex;
	height: 1408px;
	background: #f1f4f4;
	& > div {
		flex: 50%;
	}

	& > div:nth-child(1) {
		background: #f8caa0;
		position: relative;
	}

	& > div:nth-child(2) {
		padding: 48px;

		display: flex;
		flex-direction: column;
	}
`;

export const ShibImage = styled.img`
	position: absolute;
	bottom: 0;
	right: 0;
`;

export const Content = styled.div`
	position: absolute;
	left: 150px;
	top: 129px;

	display: flex;
	flex-direction: column;
	row-gap: 40px;
`;

export const Label = styled.div`
	font-weight: 800;
	font-size: 80px;
	line-height: 80px;

	letter-spacing: -0.02em;

	color: #202025;
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
`;
