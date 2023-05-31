import React from "react";
import Link from "next/link";
import Logo from "components/Logo";
// @styled components
import {
	Label,
	Description,
	LinkRightWrapper,
	MenuItemWrapper,
} from "./linkright.styles";
// @assets
import { Shibart, Info, Social } from "assets/data/menu";
import { TMenuItem } from "types/Menu/MenuItem";

const MenuItem: React.FC<TMenuItem> = ({ label, link }) => {
	return (
		<MenuItemWrapper>
			<Link href={link}>
				<span>{label}</span>
			</Link>
		</MenuItemWrapper>
	);
};

const LinkRight: React.FC = () => {
	return (
		<LinkRightWrapper>
			<div>
				<Logo pos="footer" />
				<Description>ShibArt - Generate To Earn</Description>
			</div>
			<div>
				<div>
					<Label>SHIBART</Label>
					{Shibart.map((item: TMenuItem, index: number) => (
						<MenuItem {...item} key={`shibart-footer-${index}`} />
					))}
				</div>
				<div>
					<Label>INFO</Label>
					{Info.map((item: TMenuItem, index: number) => (
						<MenuItem {...item} key={`shibart-footer-${index}`} />
					))}
				</div>
				<div>
					<Label>SOCIAL</Label>
					{Social.map((item: TMenuItem, index: number) => (
						<MenuItem {...item} key={`shibart-footer-${index}`} />
					))}
				</div>
			</div>
		</LinkRightWrapper>
	);
};

export default LinkRight;
