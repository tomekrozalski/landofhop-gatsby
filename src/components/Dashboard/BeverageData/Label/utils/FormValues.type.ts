import FieldName from './FieldName.enum';

type Lang = {
  label: string;
  value: string;
};

export type FormValues = {
  [FieldName.badge]: string;
  // -----------
  [FieldName.name]: { lang: Lang; value: string }[];
  [FieldName.series]: {
    lang: Lang;
    value: string;
  }[];
};
