import styled from "styled-components";

export const HeaderWrapper = styled.div`
	height: 96px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 22px 50px;

	border-bottom: 1px solid #e1e2e2;

	& > div:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 60px;
	}
`;
