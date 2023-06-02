import styled from "styled-components";

export const RoadMapWrapper = styled.div`
	& > div:nth-child(1) {
		margin-bottom: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			cursor: pointer;
		}
	}

	border-bottom: 1px solid #e1e2e2;
	padding: 39px 0;
`;

export const Title = styled.h3`
	font-weight: 800;
	font-size: 28px;
	line-height: 30px;

	letter-spacing: -0.02em;

	color: #3c2c2d;
`;

export const Label = styled.span`
	font-weight: 700;
	font-size: 20px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #686a6c;
`;

export const RoadMapItems = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 24px;

	& > div {
		display: flex;
		align-items: center;
		column-gap: 16px;
	}
`;
