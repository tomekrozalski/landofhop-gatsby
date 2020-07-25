import { IngredientInput, IngredientOutput } from 'dashboard/utils/types/form';

const formatData = ({
  badge,
  name,
  type,
}: IngredientInput): IngredientOutput => ({
  badge,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
  type: type.value,
});

export default formatData;
