import { TemperatureUnit } from '../enums/beverage';

export type BeverageImpressions = {
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
