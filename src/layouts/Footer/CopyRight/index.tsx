import React from "react";
// @styled component
import { CopyRightWrapper, Label } from "./copyright.styles";
import AcceptButton from "components/Button/AcceptButton";

const CopyRight: React.FC = () => {
	return (
		<CopyRightWrapper>
			<Label>Copyright © 2023 ShibArt</Label>
			<div>
				<Label>We use cookies for better service.</Label>
				<AcceptButton />
			</div>
		</CopyRightWrapper>
	);
};

export default CopyRight;
