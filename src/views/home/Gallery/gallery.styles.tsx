import styled from "styled-components";

export const GalleyWrapper = styled.div`
	padding: 150px;

	display: flex;
	flex-direction: column;
	row-gap: 64px;

	& > div:nth-child(2) {
		display: flex;
		column-gap: 12px;
		align-items: center;
	}
`;

export const Label = styled.h2`
	font-style: normal;
	font-weight: 800;
	font-size: 80px;
	line-height: 80px;

	letter-spacing: -0.02em;

	color: #3c2c2d;
`;

export const GalleryContent = styled.div`
	display: grid;
	width: fit-content;
	margin: auto;
	grid-row-gap: 64px;
	grid-column-gap: 40px;

	grid-template-columns: repeat(4, 1fr);
`;

export const ExploreButton = styled.div`
	margin: auto;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 18px 36px;
	gap: 12px;

	background: #3c2c2d;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	& > span {
		font-style: normal;
		font-weight: 800;
		font-size: 12px;
		line-height: 24px;

		letter-spacing: 0.17em;
		text-transform: uppercase;

		color: #f7fbfa;

		white-space: nowrap;
	}
`;

export const SearchInput = styled.input`
	padding: 12px 32px;

	height: 60px;
	width: 100%;

	border: 2px solid #a6aead;
	border-radius: 4px;

	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;

	color: #686a6c;
`;

export const SettingButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 15px;
	gap: 8px;

	border: 2px solid #686a6c;
	border-radius: 4px;

	cursor: pointer;
`;
