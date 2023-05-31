import styled from "styled-components";

export const AcceptWrapper = styled.div`
	padding: 8px 20px;

	border: 2px solid #3c2c2d;
	border-radius: 4px;

	cursor: pointer;

	@media screen and (max-width: 768px) {
		padding: 5px;
	}
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;

	color: #3c2c2d;
`;
