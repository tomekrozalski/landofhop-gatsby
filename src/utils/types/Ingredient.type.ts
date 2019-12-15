import { IngredientType } from '../enums/beverage';
import { LanguageValue } from '.';

export type Ingredient = {
	badge: string
	name: LanguageValue[]
	type: IngredientType
}
