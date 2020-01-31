import { ContainerType } from 'utils/enums/beverage';
import { Institution, LanguageValue } from '.';

export type BeverageBasics = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue[]
	brand: Institution
	photos: {
		cover: {
			height: number
			width: number
		} | null
	} | null
	container: {
		type: ContainerType
	}
}
