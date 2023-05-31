import { StaticImageData } from "next/image";

export interface TArt {
	label: string;
	imgSrc: StaticImageData;
	width?: number;
	height?: number;
}
