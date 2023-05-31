import { StaticImageData } from "next/image";

export interface TArt {
	label: string;
	imgSrc: string | StaticImageData;
	width?: number;
	height?: number;
}
