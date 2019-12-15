import { Country, Institution, LanguageValue } from '.';

export type Place = {
	city?: LanguageValue[]
	country: Country
	institution: Institution
	location: {
		type: 'Point'
		coordinates: number[]
	}
	shortId: string
}