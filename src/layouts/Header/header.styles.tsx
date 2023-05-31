import styled from "styled-components";

export const HeaderWrapper = styled.div`
	height: 96px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 22px 50px;

	border-bottom: 1px solid #e1e2e2;

	@media screen and (max-width: 768px) {
		padding: 22px;
	}
`;

export const DeskMenu_W = styled.div`
	display: flex;
	align-items: center;
	gap: 60px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MobileMenu_W = styled.div`
	@media screen and (min-width: 769px) {
		display: none;
	}
`;
