/* eslint-disable no-shadow */
import { useIntl } from 'gatsby-plugin-intl';

import { ExtendedLanguageValue } from 'utils/types';
import { getValueByLanguage } from 'utils/helpers';
import {
  Beverage as BeverageTypes,
  Institution as InstitutionTypes,
  InstitutionTranslated as InstitutionTranslatedTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from '../types';

type IngredientsDescriptionType = {
  complete: boolean;
  language: string;
  value: string;
};

const translateBeverage = ({
  brand,
  name,
  cooperation,
  contract,
  place,
  remark,
  tale,
  dryHopped,
  ingredientsDescription,
  ingredientsList,
  ...rest
}: BeverageTypes): TranslatedBeverageTypes => {
  const { locale } = useIntl();

  const translate = (values: ExtendedLanguageValue[]) =>
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
    remark: remark
      ? {
          label: remark.label ? translate(remark.label) : null,
          producer: remark.producer ? translate(remark.producer) : null,
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
            ? dryHopped.label.map(({ id, name }) => ({
                id,
                name: translate(name),
              }))
            : null,
          producer: dryHopped.producer
            ? dryHopped.producer.map(({ id, name }) => ({
                id,
                name: translate(name),
              }))
            : null,
          editorial: dryHopped.editorial
            ? dryHopped.editorial.map(({ id, name }) => ({
                id,
                name: translate(name),
              }))
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
