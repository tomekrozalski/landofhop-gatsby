import {
	AlcoholRelate,
	AlcoholScope,
	AlcoholUnit,
	ExpirationDateUnit,
	ExtractRelate,
	ExtractUnit,
	Fermentation,
} from '../enums/beverage';

import { Aged, Ingredient, LanguageValue } from '.';

export type Brewing = {
	fermentation?: Fermentation[]
	extract?: {
		relate: ExtractRelate
		unit: ExtractUnit
		value: number
	}
	alcohol?: {
		relate: AlcoholRelate
		unit: AlcoholUnit
		value: number
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
	expirationDate?: {
		value: number
		unit: ExpirationDateUnit
	}
};
