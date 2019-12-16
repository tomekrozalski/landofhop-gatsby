import { GatsbyImageProps } from 'gatsby-image';
import { LanguageValue } from '.';

export type BeverageBasics = {
  badge: string
  coverPhoto: {
    childImageSharp?: GatsbyImageProps
    publicURL: string
  }
  label: {
    general: {
      brand: {
        badge: string
        name: LanguageValue[]
      }
      name: LanguageValue[]
    }
  }
  mongodb_id: string
  shortId: string
}
