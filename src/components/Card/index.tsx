import React from "react";
// @styled components
import { CardWrapper, Label, Title, Number } from "./card.styles";
// @types
import { TCard } from "types/card";

const Card: React.FC<TCard> = ({ ...props }) => {
	return (
		<CardWrapper>
			<Number>
				<span>{props.number}</span>
			</Number>
			<Title>{props.title}</Title>
			<Label>{props.label}</Label>
		</CardWrapper>
	);
};

export default Card;
