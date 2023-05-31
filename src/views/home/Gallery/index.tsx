import React from "react";
import ArtImage from "components/ArtImage";
// @styled components
import {
	GalleyWrapper,
	Label,
	GalleryContent,
	ExploreButton,
	SearchInput,
	SettingButton,
} from "./gallery.styles";
// @assets
import { ShibArts } from "assets/data/swiper";
// @types
import { TArt } from "types/Art";
import SettingIcon from "components/Icons/setting";

const GalleyView: React.FC = () => {
	return (
		<GalleyWrapper>
			<Label>Gallery.</Label>
			<div>
				<SearchInput placeholder="Shiba inu wearing sunglasses" />
				<ExploreButton>
					<span>generate</span>
				</ExploreButton>
				<SettingButton>
					<SettingIcon />
				</SettingButton>
			</div>
			<GalleryContent>
				{ShibArts.map((item: TArt, index: number) => (
					<ArtImage key={`galley-art-${index}`} {...item} />
				))}
			</GalleryContent>
			<ExploreButton>
				<span>explorer more</span>
			</ExploreButton>
		</GalleyWrapper>
	);
};

export default GalleyView;
