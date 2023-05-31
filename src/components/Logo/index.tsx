import React from "react";
import Link from "next/link";
import Image from "next/image";
// styled components
import { LogoWrapper, Label, Text } from "./logo.styles";
// assets
import LogoImg from "assets/images/logo.png";

const Logo: React.FC<{ pos: "header" | "footer" }> = ({ pos }) => {
	return (
		<Link href={"/"}>
			<LogoWrapper pos={pos}>
				<Image src={LogoImg} alt="logo" width={50} height={50} />
				<Label>
					<Text color="primary">SHIB</Text>
					<Text color="secondary">ART</Text>
				</Label>
			</LogoWrapper>
		</Link>
	);
};

export default Logo;
