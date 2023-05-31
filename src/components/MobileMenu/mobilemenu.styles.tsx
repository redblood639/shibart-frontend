import styled from "styled-components";

export const MenuWrapper = styled.div`
	background: #010101;

	position: absolute;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	& > div:nth-child(1) {
		display: flex;
		justify-content: end;
	}
`;

export const MenuContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const MenuItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	border-bottom: 1px solid #202025;

	padding: 24px 0px;

	:hover {
		svg {
			& > path {
				stroke: #f7fbfa;
			}
		}
	}
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 24px;
	line-height: 32px;

	letter-spacing: -0.02em;

	color: #e1e2e2;
`;

export const SpeicalLabel = styled.span`
	font-weight: 800;
	font-size: 24px;
	line-height: 32px;

	letter-spacing: -0.02em;

	background: conic-gradient(
		from 180deg at 50% 50%,
		#5fff5c -18.66deg,
		#ffe249 22.23deg,
		#f35950 78.14deg,
		#7c5bff 159deg,
		#1ce4ff 202.32deg,
		#5fff5c 341.34deg,
		#ffe249 382.23deg
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;
