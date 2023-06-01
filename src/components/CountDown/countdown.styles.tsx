import styled from "styled-components";

export const CountDownWrapper = styled.div`
	display: flex;
	column-gap: 24px;

	@media screen and (max-width: 425px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 24px;
	}
`;
