import { LanguageValue } from '.';

export type Institution = {
	badge: string
	name: LanguageValue[]
	shortId: string
	website?: string
	consortium?: Institution
}
