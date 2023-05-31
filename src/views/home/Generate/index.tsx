import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ArtImage from "components/ArtImage";
// @styled components
import {
	GenerateWrapper,
	Label,
	Header,
	CreateButton,
} from "./generate.styles";
// @assets
import { ShibArts } from "assets/data/swiper";
// @types
import { TArt } from "types/Art";

const GenerateView: React.FC = () => {
	return (
		<GenerateWrapper>
			<Header>ShibArt - Generate To Earn</Header>
			<Label>
				We are revolutionizing the world of digital art with the power of stable
				diffusion & blockchain
			</Label>
			<Swiper
				className="create-swiper"
				breakpoints={{
					1024: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1440: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1600: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1900: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
				}}
			>
				{ShibArts.map((item: TArt, index: number) => (
					<SwiperSlide key={`swiper-creat-art-${index}`}>
						<ArtImage {...item} />
					</SwiperSlide>
				))}
			</Swiper>
			<CreateButton>
				<span>Start creating</span>
			</CreateButton>
		</GenerateWrapper>
	);
};

export default GenerateView;
