import { GatsbyImageProps } from 'gatsby-image';
import { InstitutionTranslated, LanguageValue } from '../';

export type BeverageBasicsTranslated = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	brand: InstitutionTranslated
	coverPhoto: {
		childImageSharp: GatsbyImageProps | null
		publicURL: string
	}
}
