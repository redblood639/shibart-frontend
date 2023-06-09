import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
	& > div {
		flex: 50%;
		@media screen and (max-width: 768px) {
			flex: 1;
		}
	}

	& > div:nth-child(1) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		::after {
			content: " ";
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(
				180deg,
				rgba(241, 244, 244, 0) 49.93%,
				#ffffff 97.22%
			);
		}
	}

	& > div:nth-child(2) {
		background: #f8caa0;
		padding: 24px 48px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 25px;
	}

	@media screen and (max-width: 375px) {
		flex-direction: column;
	}
`;
