import React from "react";
// @styled components
import { ArtImageWrapper } from "./artimage.styles";
// @types
import { TArt } from "types/Art";
import Image from "next/image";

const ArtImage: React.FC<TArt> = ({
	imgSrc,
	label,
	width = 330,
	height = 330,
}) => {
	return (
		<ArtImageWrapper>
			<Image src={imgSrc} alt={label} width={width} height={height} />
		</ArtImageWrapper>
	);
};

export default ArtImage;
