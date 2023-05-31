import styled from "styled-components";

export const LogoWrapper = styled.div<{ pos: "header" | "footer" }>`
	display: flex;
	align-items: center;
	gap: 12px;
	position: relative;

	@media screen and (min-width: 376px) {
		${({ pos }) => {
			if (pos === "header")
				return `
			&::after {
				content: " ";
				display: block;
				background: #e1e2e2;
				height: 96px;
				width: 1.5px;

				position: absolute;
				right: -32px;
			}
    `;
		}};
	}
`;

export const Label = styled.p`
	text-transform: uppercase;

	font-weight: 900;
	font-size: 36px;
	line-height: 52px;
`;

export const Text = styled.span<{ color: string }>`
	color: ${({ color }) => (color === "primary" ? "#3C2C2D" : "#FE6768")};
`;
