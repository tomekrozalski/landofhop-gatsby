import { GatsbyImageProps } from 'gatsby-image';
import { Institution, LanguageValue } from '.';

export type BeverageBasics = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue[]
	brand: Institution
	coverPhoto: {
		childImageSharp?: GatsbyImageProps
		publicURL: string
	}
}
