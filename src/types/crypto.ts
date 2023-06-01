import { StaticImageData } from "next/legacy/image";

export interface TCrypto {
	icon1: StaticImageData;
	icon2: StaticImageData;
	symbol: string;
	network: string;
}

export interface TWallet {
	icon: StaticImageData;
	name: string;
}
