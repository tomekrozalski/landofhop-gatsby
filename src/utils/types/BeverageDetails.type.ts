import { AlcoholScope, Fermentation } from '../enums/beverage';

import LanguageValueType from './LanguageValue.type';

type Institution = {
	badge: string
	name: LanguageValueType[]
	shortId: string
	website?: string
	consortium?: Institution
}

type Country = {
	code: string
	name: LanguageValueType[]
}

type Place = {
	city?: LanguageValueType[]
	country: Country
	institution: Institution
	location: {
		type: 'Point'
		coordinates: number[]
	}
	shortId: string
}

type BeverageDetails = {
	shortId: string
	badge: string
	label: {
		general: {
			name: LanguageValueType[]
			series?: LanguageValueType[]
			brand: Institution
			cooperation?: Institution[]
			contract?: Institution
			place?: Place
			tale?: LanguageValueType[]
			barcode?: string
		}
	}

	added: Date
	editorial: {
		brewing: {
			fermentation: Fermentation[]
			alcohol: {
				scope: AlcoholScope
			}
			style: LanguageValueType[]
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

export default BeverageDetails;
