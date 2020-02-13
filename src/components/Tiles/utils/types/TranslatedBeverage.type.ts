import { ContainerType } from 'utils/enums/beverage';
import { LanguageValue } from 'utils/types';

export type TranslatedBeverage = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	brand: {
		badge: string
		name: LanguageValue
	}
	photos: {
		cover: {
			height: number
			width: number
		} | null
		outlines: {
			cover?: string
		} | null
	} | null
	container: {
		type: ContainerType
	}
}
