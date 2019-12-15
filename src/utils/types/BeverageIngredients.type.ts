import { Ingredient } from '.';

export type BeverageIngredients = {
	description?: {
		complete: boolean
		language?: string
		value: string,
	}[]
	list?: Ingredient[]
	smokedMalt?: boolean
}
