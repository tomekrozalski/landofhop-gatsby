import { GatsbyImageProps } from 'gatsby-image';

import { DataLanguage } from '../enums';
import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  Clarity,
  ContainerColor,
  ContainerMaterial,
  ContainerUnit,
  ContainerType,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  Fermentation,
  IngredientType,
  TemperatureUnit,
} from '../enums/beverage';

import { Aged, BeveragePrice, Institution, LanguageValue } from '.';

export type Beverage = {
  shortId: string
  badge: string
  name: LanguageValue[]
  series?: {
    label?: LanguageValue[]
    producer?: LanguageValue[]
  }
  brand: Institution
  cooperation?: {
    label?: Institution[]
    producer?: Institution[]
    editorial?: Institution[]
  }
  contract?: {
    label?: Institution
    producer?: Institution
    editorial?: Institution
  }
  place?: {
    label?: {
      city: LanguageValue
      country: LanguageValue
    }
    producer?: {
      city: LanguageValue
      country: LanguageValue
    }
    editorial?: {
      city: LanguageValue
      country: LanguageValue
    }
  }
  tale?: {
    label?: LanguageValue[]
    producer?: LanguageValue
  }
  barcode?: string
  fermentation?: {
    label?: Fermentation[]
    producer?: Fermentation[]
    editorial?: Fermentation[]
  }
  extract?: {
    label?: {
      relate: ExtractRelate
      unit: ExtractUnit
      value: number
    }
    producer?: {
      relate: ExtractRelate
      unit: ExtractUnit
      value: number
    }
  }
  alcohol?: {
    label?: {
      relate: AlcoholRelate
      unit: AlcoholUnit
      value: number
      scope?: AlcoholScope
    }
    producer?: {
      relate: AlcoholRelate
      unit: AlcoholUnit
      value: number
      scope?: AlcoholScope
    }
    editorial?: {
      scope: AlcoholScope
    }
  }
  filtration?: {
    label?: boolean
    producer?: boolean
    editorial?: boolean
  }
  pasteurization?: {
    label?: boolean
    producer?: boolean
    editorial?: boolean
  }
  aged?: {
    label?: true | Aged[]
    producer?: true | Aged[]
    editorial?: true | Aged[]
  }
  style?: {
    label?: LanguageValue[]
    producer?: LanguageValue[]
    editorial?: LanguageValue[]
  }
  dryHopped?: {
    label?: true | LanguageValue[]
    producer?: true | LanguageValue[]
    editorial?: true | LanguageValue[]
  }
  expirationDate?: {
    label?: {
      value: number
      unit: ExpirationDateUnit
    }
    producer?: {
      value: number
      unit: ExpirationDateUnit
    }
  }
  ingredientsDescription?: {
    label?: {
      complete: boolean
      language: DataLanguage
      value: string
    }
    producer?: {
      complete: boolean
      language: DataLanguage
      value: string
    }
  }
  ingredientsList?: {
    label?: {
      name: LanguageValue
      type: IngredientType
    }[]
    producer?: {
      name: LanguageValue
      type: IngredientType
    }[]
  }
  smokedMalt?: {
    label?: boolean
    producer?: boolean
  }
  bitterness?: {
    label?: number
    producer?: number
  }
  sweetness?: {
    label?: number
    producer?: number
  }
  fullness?: {
    label?: number
    producer?: number
  }
  power?: {
    label?: number
    producer?: number
  }
  hoppyness?: {
    label?: number
    producer?: number
  }
  temperature?: {
    label?: {
      from: number
      to: number
      unit: TemperatureUnit
    }
    producer?: {
      from: number
      to: number
      unit: TemperatureUnit
    }
  }
  color?: {
    editorial?: string
  }
  clarity?: {
    editorial?: Clarity
  }
  container: {
    color: ContainerColor
    material: ContainerMaterial
    unit: ContainerUnit
    type: ContainerType
    value: number
    hasCapWireFlip?: boolean
  }
  price?: {
    label?: BeveragePrice[]
    producer?: BeveragePrice[]
    editorial?: BeveragePrice[]
  }
  photos?: {
    cap?: boolean
    cover?: {
      height: number
      width: number
    }
    gallery?: number
  }
  notes?: string
  added: Date
  updated?: Date
  coverPhoto: {
    childImageSharp?: GatsbyImageProps
    publicURL: string
  }
  galleryPhoto: {
    childImageSharp?: GatsbyImageProps
    publicURL: string
  }
}
