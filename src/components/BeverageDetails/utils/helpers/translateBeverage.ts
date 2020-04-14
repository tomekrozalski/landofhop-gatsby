/* eslint-disable no-shadow */
import { useIntl } from 'gatsby-plugin-intl';

import { LanguageValue } from 'utils/types';
import { DataLanguage } from 'utils/enums';
import { getValueByLanguage } from 'utils/helpers';
import {
  Beverage as BeverageTypes,
  Institution as InstitutionTypes,
  InstitutionTranslated as InstitutionTranslatedTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from '../types';

type IngredientsDescriptionType = {
  complete: boolean;
  language: DataLanguage;
  value: string;
};

const translateBeverage = ({
  brand,
  name,
  cooperation,
  contract,
  place,
  tale,
  dryHopped,
  ingredientsDescription,
  ingredientsList,
  ...rest
}: BeverageTypes): TranslatedBeverageTypes => {
  const { locale } = useIntl();

  const translate = (values: LanguageValue[]) =>
    getValueByLanguage(values, locale);

  const normalizeBrand = ({
    badge,
    name,
    shortId,
    website,
    consortium,
  }: InstitutionTypes): InstitutionTranslatedTypes => ({
    badge,
    name: translate(name),
    shortId,
    website,
    consortium: consortium ? translate(consortium) : null,
  });

  const translatedBeverageDetails = {
    name: translate(name),
    brand: normalizeBrand(brand),
    cooperation: cooperation
      ? {
          label: cooperation.label
            ? cooperation.label.map(brand => normalizeBrand(brand))
            : null,
          producer: cooperation.producer
            ? cooperation.producer.map(brand => normalizeBrand(brand))
            : null,
          editorial: cooperation.editorial
            ? cooperation.editorial.map(brand => normalizeBrand(brand))
            : null,
        }
      : null,
    contract: contract
      ? {
          label: contract.label ? normalizeBrand(contract.label) : null,
          producer: contract.producer
            ? normalizeBrand(contract.producer)
            : null,
          editorial: contract.editorial
            ? normalizeBrand(contract.editorial)
            : null,
        }
      : null,
    place: place
      ? {
          label: place.label
            ? {
                city: translate(place.label.city),
                country: translate(place.label.country),
              }
            : null,
          producer: place.producer
            ? {
                city: translate(place.producer.city),
                country: translate(place.producer.country),
              }
            : null,
          editorial: place.editorial
            ? {
                city: translate(place.editorial.city),
                country: translate(place.editorial.country),
              }
            : null,
        }
      : null,
    tale: tale
      ? {
          label: tale.label,
          producer: tale.producer
            ? tale.producer.find(item => item.language === locale) || null
            : null,
        }
      : null,
    dryHopped: dryHopped
      ? {
          label: dryHopped.label
            ? dryHopped.label.map(hop => translate(hop))
            : null,
          producer: dryHopped.producer
            ? dryHopped.producer.map(hop => translate(hop))
            : null,
          editorial: dryHopped.editorial
            ? dryHopped.editorial.map(hop => translate(hop))
            : null,
        }
      : null,
    ingredientsDescription: ingredientsDescription
      ? {
          label: ingredientsDescription.label
            ? (translate(
                ingredientsDescription.label,
              ) as IngredientsDescriptionType)
            : null,
          producer: ingredientsDescription.producer
            ? (translate(
                ingredientsDescription.producer,
              ) as IngredientsDescriptionType)
            : null,
        }
      : null,
    ingredientsList: ingredientsList
      ? {
          label: ingredientsList.label
            ? ingredientsList.label.map(({ name, type }) => ({
                name: translate(name),
                type,
              }))
            : null,
          producer: ingredientsList.producer
            ? ingredientsList.producer.map(({ name, type }) => ({
                name: translate(name),
                type,
              }))
            : null,
        }
      : null,
    ...rest,
  };

  return translatedBeverageDetails;
};

export default translateBeverage;
