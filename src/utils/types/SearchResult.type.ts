import { ContainerType } from 'utils/enums/beverage';
import { LanguageValue } from '.';

export type SearchResult = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	brand: {
		badge: string
		name: LanguageValue
	}
	containerType: ContainerType
}
