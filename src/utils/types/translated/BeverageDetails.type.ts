import { GatsbyImageProps } from 'gatsby-image';

import { DataLanguage } from '../../enums';
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
} from '../../enums/beverage';

import { Aged, BeveragePrice, InstitutionTranslated, LanguageValue } from '../';

export type BeverageDetailsTranslated = {
	id: string
	shortId: string
	badge: string
	name: LanguageValue
	series: {
		label: LanguageValue[] | null
		producer: LanguageValue[] | null
	} | null
	brand: InstitutionTranslated
	cooperation: {
		label: InstitutionTranslated[] | null
		producer: InstitutionTranslated[] | null
		editorial: InstitutionTranslated[] | null
	} | null
	contract: {
		label: InstitutionTranslated | null
		producer: InstitutionTranslated | null
		editorial: InstitutionTranslated | null
	} | null
	place: {
		label: {
			city: LanguageValue
			country: LanguageValue
		} | null
		producer: {
			city: LanguageValue
			country: LanguageValue
		} | null
		editorial: {
			city: LanguageValue
			country: LanguageValue
		} | null
	} | null
	tale: {
		label: LanguageValue[] | null
		producer: LanguageValue | null
	} | null
	barcode: string | null
	fermentation: {
		label: Fermentation[] | null
		producer: Fermentation[] | null
		editorial: Fermentation[] | null
	} | null
	extract: {
		label: {
			relate: ExtractRelate
			unit: ExtractUnit
			value: number
		} | null
		producer: {
			relate: ExtractRelate
			unit: ExtractUnit
			value: number
		} | null
	} | null
	alcohol: {
		label: {
			relate: AlcoholRelate
			unit: AlcoholUnit
			value: number
			scope: AlcoholScope | null
		} | null
		producer: {
			relate: AlcoholRelate
			unit: AlcoholUnit
			value: number
			scope: AlcoholScope | null
		} | null
		editorial: {
			scope: AlcoholScope
		} | null
	} | null
	filtration: {
		label: boolean | null
		producer: boolean | null
		editorial: boolean | null
	} | null
	pasteurization: {
		label: boolean | null
		producer: boolean | null
		editorial: boolean | null
	} | null
	isAged: {
		label: true | null
		producer: true | null
		editorial: true | null
	} | null
	aged: {
		label: Aged[] | null
		producer: Aged[] | null
		editorial: Aged[] | null
	} | null
	style: {
		label: LanguageValue[] | null
		producer: LanguageValue[] | null
		editorial: LanguageValue[] | null
	} | null
	isDryHopped: {
		label: true | null
		producer: true | null
		editorial: true | null
	} | null
	dryHopped: {
		label: Array<LanguageValue> | null
		producer: Array<LanguageValue> | null
		editorial: Array<LanguageValue> | null
	} | null
	expirationDate: {
		label: {
			value: number
			unit: ExpirationDateUnit
		} | null
		producer: {
			value: number
			unit: ExpirationDateUnit
		} | null
	} | null
	ingredientsDescription: {
		label: {
			complete: boolean
			language: DataLanguage
			value: string
		} | null
		producer: {
			complete: boolean
			language: DataLanguage
			value: string
		} | null
	} | null
	ingredientsList: {
		label: {
			name: LanguageValue
			type: IngredientType
		}[] | null
		producer: {
			name: LanguageValue
			type: IngredientType
		}[] | null
	} | null
	smokedMalt: {
		label: boolean | null
		producer: boolean | null
	} | null
	bitterness: {
		label: number | null
		producer: number | null
	} | null
	sweetness: {
		label: number | null
		producer: number | null
	} | null
	fullness: {
		label: number | null
		producer: number | null
	} | null
	power: {
		label: number | null
		producer: number | null
	} | null
	hoppyness: {
		label: number | null
		producer: number | null
	} | null
	temperature: {
		label: {
			from: number
			to: number
			unit: TemperatureUnit
		} | null
		producer: {
			from: number
			to: number
			unit: TemperatureUnit
		} | null
	} | null
	color: {
		editorial: string | null
	} | null
	clarity: {
		editorial: Clarity | null
	} | null
	container: {
		color: ContainerColor
		material: ContainerMaterial
		unit: ContainerUnit
		type: ContainerType
		value: number
		hasCapWireFlip: boolean | null
	}
	price: {
		label: BeveragePrice[] | null
		producer: BeveragePrice[] | null
		editorial: BeveragePrice[] | null
	} | null
	photos: {
		cap: boolean | null
		gallery: number | null
	} | null
	notes: string | null
	added: Date
	updated: Date | null
}
