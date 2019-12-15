import { LanguageValue } from '.';

export type BeverageBasics = {
  badge: string
  coverPhoto: {
    childImageSharp: {
      fluid: object
    }
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
