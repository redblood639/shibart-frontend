import styled from "styled-components";

export const MainWrapper = styled.div`
	display: flex;

	& > div {
		display: flex;
		flex-basis: 50%;
		align-items: center;
		justify-content: center;
	}

	& > div:nth-child(1) {
		position: relative;

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
	}
`;
