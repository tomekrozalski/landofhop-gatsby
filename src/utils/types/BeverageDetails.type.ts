import {
	AlcoholScope,
	Clarity,
	ContainerColor,
	ContainerMaterial,
	ContainerType,
	ContainerUnit,
	Fermentation,
} from '../enums/beverage';

import {
	Aged,
	BeverageImpressions,
	BeverageIngredients,
	BeveragePrice,
	Brewing,
	Ingredient,
	Institution,
	LanguageValue,
	Place,
} from '.';

export type BeverageDetails = {
	shortId: string
	badge: string
	label: {
		general: {
			name: LanguageValue[]
			series?: LanguageValue[]
			brand: Institution
			cooperation?: Institution[]
			contract?: Institution
			place?: Place
			tale?: LanguageValue[]
			barcode?: string
		}
		brewing?: Brewing
		ingredients?: BeverageIngredients
		impressions?: BeverageImpressions
		container: {
			color: ContainerColor
			material: ContainerMaterial
			unit: ContainerUnit
			type: ContainerType
			value: number
			hasCapWireFlip?: boolean
		}
		price?: BeveragePrice
	}
	producer?: {
		general?: {
			series?: LanguageValue[]
			brand?: Institution
			cooperation?: Institution[]
			contract?: Institution
			place?: Place
			tale?: LanguageValue[]
		}
		brewing?: Brewing
		ingredients?: BeverageIngredients
		impressions?: BeverageImpressions
		price?: BeveragePrice
	}
	editorial?: {
		general?: {
			cooperation?: Institution[]
			contract?: Institution
			place?: Place
		}
		brewing?: {
			fermentation?: Fermentation[]
			alcohol?: {
				scope?: AlcoholScope
			}
			filtration?: boolean
			pasteurization?: boolean
			aged?: Aged[]
			style?: LanguageValue[]
			isDryHopped?: boolean
			dryHopped?: {
				hops: {
					type: Ingredient[]
				}
			}
		}
		impressions?: {
			color?: string
			clarity?: Clarity
		}
		price?: BeveragePrice
		photos?: {
			cap?: boolean
			cover?: {
				height: number
				width: number
			}
			gallery?: number
		}
		notes?: string
	}
	added: Date
	updated?: Date
}
