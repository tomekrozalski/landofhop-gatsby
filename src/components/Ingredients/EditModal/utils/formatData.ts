import { IngredientInput, IngredientOutput } from 'dashboard/utils/types/form';

const formatData = ({
  badge,
  name,
  parent,
  type,
}: IngredientInput): IngredientOutput => ({
  badge,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
  type: type.value,
  ...(parent.value && { parent: parent.value }),
});

export default formatData;
