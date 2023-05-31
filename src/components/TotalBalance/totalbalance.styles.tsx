import styled from "styled-components";

export const TotalBalanceWrapper = styled.div`
	height: 50px;
	background: #8c7662;
	border-radius: 4px;
	text-align: center;

	position: relative;
`;

export const UsedBalance = styled.div`
	background: #3c2c2d;
	border-radius: 4px;
	width: 80%;
	height: 100%;
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 12px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #f7fbfa;

	position: absolute;
	top: 25%;
	left: calc(50% - 121px);
`;
