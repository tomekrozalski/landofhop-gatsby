import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { LanguageValue as LanguageValueType } from 'dashboard/utils/types';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { BeverageType } from '../../Beverage.type';

type Props = {
  data: BeverageType;
  intl: IntlShape;
  languages: any[];
};

const dataToProducerForm = ({ data, intl, languages }: Props) => {
  const {
    badge,
    barcode,
    brand,
    container,
    contract,
    cooperation,
    name,
    place,
    series,
    tale,
  } = data;
  const { formatMessage, locale } = intl;

  console.log('dataToProducerForm', data);

  const getLanguageLabelById = (value: string) =>
    getValueByLanguage(
      languages.find(({ id }) => id === value).name,
      locale as SiteLanguage,
    ).value;

  const getLabelByLanguageId = (language: string | undefined) => {
    switch (language) {
      case '':
        return '';
      case undefined:
        return formatMessage({ id: 'language.none' });
      default:
        return getLanguageLabelById(language);
    }
  };

  const LanguageNormalizer = ({ language, value }: LanguageValueType) => {
    return {
      lang: {
        label: getLabelByLanguageId(language),
        value: language || 'none',
      },
      value,
    };
  };

  const normalizeObjectLanguage = ({
    id,
    name: brandName,
  }: {
    id: string;
    name: { language?: string; value: string }[];
  }) => {
    const normalizedNames = brandName.map(({ language, value }) => ({
      language: language
        ? languages.find(({ id: langId }) => langId === language).code
        : 'none',
      value,
    }));

    return {
      label: getValueByLanguage(normalizedNames, locale as SiteLanguage).value,
      value: id,
    };
  };

  return {
    [FieldName.tale]: tale?.producer?.map(LanguageNormalizer) || [],
  };
};

export default dataToProducerForm;
