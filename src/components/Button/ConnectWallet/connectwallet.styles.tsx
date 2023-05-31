import styled from "styled-components";

export const ButtonWrapper = styled.div<{ type: string }>`
	cursor: pointer;
	padding: 12px 32px;
	background: ${({ type }) => (type === "second" ? "#3C2C2D" : "#f7fbfa")};
	border: 2px solid #555555;
	text-align: center;
	border-radius: 4px;
	color: ${({ type }) => (type === "second" ? "#f7fbfa" : "#202025")};
	&:hover {
		color: #555555;
	}
`;

export const Label = styled.span`
	font-weight: 800;
	font-size: 14px;
	line-height: 24px;

	letter-spacing: 0.17em;
	text-transform: uppercase;
`;
