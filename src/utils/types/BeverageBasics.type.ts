import LanguageValue from './LanguageValue.type';

type BeverageBasics = {
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
  shortId: string
}

export default BeverageBasics
