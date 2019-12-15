import { AgedTimeUnit, AgedType } from '../enums/beverage';

export type Aged = {
	type?: AgedType
	wood?: string
	time?: {
		value: number
		unit: AgedTimeUnit
	}
	previousContent?: string[]
}
