import {
	AgedPreviousContent,
	AgedTimeUnit,
	AgedType,
	AgedWood,
} from '../enums/beverage';

export type Aged = {
	type?: AgedType
	wood?: AgedWood
	time?: {
		value: number
		unit: AgedTimeUnit
	}
	previousContent?: AgedPreviousContent[]
}
