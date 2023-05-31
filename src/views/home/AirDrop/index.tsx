import React from "react";
import Card from "components/Card";
// @styled components
import {
	AirDropWrapper,
	Title,
	Label,
	BuyButton,
	CardContent,
} from "./airdrop.styles";
// @assets
import { CardData } from "assets/data/card";
// @types
import { TCard } from "types/card";

const AirDropView: React.FC = () => {
	return (
		<AirDropWrapper>
			<div>
				<Title>
					<span>$ART</span> 50 billion token airdrop
				</Title>
				<Label>
					Help us reach our presale target and receive a huge $ART airdrop! The
					reward will be based on your cumulative referral amount. Follow these
					steps to join:
				</Label>
			</div>
			<CardContent>
				{CardData.map((item: TCard, index: number) => (
					<Card key={`airdrop-card-${index}`} {...item} />
				))}
			</CardContent>
			<BuyButton>
				<span>buy $ART now</span>
			</BuyButton>
		</AirDropWrapper>
	);
};

export default AirDropView;
