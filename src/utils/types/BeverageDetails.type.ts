import {
	AgedTimeUnit,
	AgedType,
	AlcoholRelate,
	AlcoholScope,
	AlcoholUnit,
	ContainerColor,
	ContainerMaterial,
	ExpirationDateUnit,
	ExtractRelate,
	ExtractUnit,
	Fermentation,
	IngredientType,
	TemperatureUnit,
} from '../enums/beverage';

import { LanguageValue } from '.';

type Institution = {
	badge: string
	name: LanguageValue[]
	shortId: string
	website?: string
	consortium?: Institution
}

type Country = {
	code: string
	name: LanguageValue[]
}

type Place = {
	city?: LanguageValue[]
	country: Country
	institution: Institution
	location: {
		type: 'Point'
		coordinates: number[]
	}
	shortId: string
}

type Aged = {
	type?: AgedType
	wood?: string
	time?: {
		value: number
		unit: AgedTimeUnit
	}
	previousContent?: string[]
}

type Ingredient = {
	badge: string
	name: LanguageValue[]
	type: IngredientType
}

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
		brewing?: {
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
		}
		ingredients?: {
			description?: {
				complete: boolean
				language?: string
				value: string,
			}[]
			list?: Ingredient[]
			smokedMalt?: boolean
		}
		impressions?: {
			bitterness?: number
			sweetness?: number
			fullness?: number
			power?: number
			hoppyness?: number
			temperature?: {
				from: number
				to: number
				unit: TemperatureUnit
			}
		}
		container: {
			color: ContainerColor
			material: ContainerMaterial
		}

	}

	added: Date
	editorial: {
		brewing: {
			fermentation: Fermentation[]
			alcohol: {
				scope: AlcoholScope
			}
			style: LanguageValue[]
		}
		general: {
			cooperation: 'xxx'
		}
		// impressions {
		// 	color
		// }
		// notes
		// photos {
		// 	cap
		// 	gallery
		// }
		// price {
		// 	currency
		// 	date
		// }

	}





	// label {
	// 	general {
	// 		name {
	// 			value
	// 			language
	// 		}
	// 		barcode
	// 		brand {
	// 			badge
	// 			consortium
	// 			name {
	// 				language
	// 				value
	// 			}
	// 			shortId
	// 			website
	// 		}
	// 		contract
	// 		cooperation
	// 		place
	// 		series {
	// 			language
	// 			value
	// 		}
	// 		tale {
	// 			language
	// 			value
	// 		}
	// 	}
	// 	brewing {
	// 		aged {
	// 			previousContent
	// 			time {
	// 				unit
	// 				value
	// 			}
	// 			type
	// 			wood
	// 		}
	// 		alcohol {
	// 			relate
	// 			scope
	// 			unit
	// 		}
	// 		dryHopped {
	// 			hops
	// 		}
	// 		expirationDate {
	// 			unit
	// 			value
	// 		}
	// 		extract {
	// 			relate
	// 			unit
	// 		}
	// 		fermentation
	// 		filtration
	// 		isDryHopped
	// 		pasteurization
	// 		style {
	// 			language
	// 			value
	// 		}
	// 	}
	// 	container {
	// 		color
	// 		hasCapWireFlip
	// 		material
	// 		type
	// 		unit
	// 		value
	// 	}
	// 	impressions {
	// 		bitterness
	// 		fullness
	// 		hoppyness
	// 		power
	// 		sweetness
	// 		temperature {
	// 			from
	// 			to
	// 			unit
	// 		}
	// 	}
	// 	ingredients {
	// 		description {
	// 			complete
	// 			language
	// 			value
	// 		}
	// 		list
	// 		smokedMalt
	// 	}
	// }
	// shortId
	// updated
	// producer {
	// 	brewing {
	// 		alcohol {
	// 			relate
	// 			unit
	// 		}
	// 		dryHopped {
	// 			hops
	// 		}
	// 		expirationDate {
	// 			unit
	// 			value
	// 		}
	// 		extract {
	// 			relate
	// 			unit
	// 		}
	// 		fermentation
	// 		style {
	// 			language
	// 			value
	// 		}
	// 	}
	// 	general {
	// 		tale {
	// 			language
	// 			value
	// 		}
	// 	}
	// 	impressions {
	// 		bitterness
	// 		fullness
	// 		hoppyness
	// 		sweetness
	// 		temperature {
	// 			from
	// 			unit
	// 			to
	// 		}
	// 	}
	// 	ingredients {
	// 		list
	// 		description {
	// 			complete
	// 			language
	// 			value
	// 		}
	// 	}
	// }
}
