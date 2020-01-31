import { ContainerType } from 'utils/enums/beverage';
import { InstitutionTranslated, LanguageValue } from '../';

export type BeverageBasicsTranslated = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	brand: InstitutionTranslated
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
