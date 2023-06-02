import React, { useEffect, useState } from "react";
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
import SettingIcon from "assets/Icons/setting";

const GalleyView: React.FC = () => {
	const [items, setItems] = useState<TArt[]>([]);
	const [count, setCount] = useState<number>(4);

	useEffect(() => {
		setItems(ShibArts.slice(0, count));
	}, [count]);

	const onExtendGallery = () => {
		setCount(count * 2);
	};
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
				{items.map((item: TArt, index: number) => (
					<ArtImage key={`galley-art-${index}`} {...item} />
				))}
			</GalleryContent>
			{ShibArts.length - items.length != 0 && (
				<ExploreButton onClick={onExtendGallery}>
					<span>explorer more</span>
					<span>{ShibArts.length - items.length}</span>
				</ExploreButton>
			)}
		</GalleyWrapper>
	);
};

export default GalleyView;
