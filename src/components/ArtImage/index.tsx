import React from "react";
// @styled components
import { ArtImageWrapper } from "./artimage.styles";
// @types
import { TArt } from "types/Art";
import Image from "next/legacy/image";

const ArtImage: React.FC<TArt> = ({ imgSrc, label }) => {
	return (
		<ArtImageWrapper>
			<Image src={imgSrc} alt={label} />
		</ArtImageWrapper>
	);
};

export default ArtImage;
