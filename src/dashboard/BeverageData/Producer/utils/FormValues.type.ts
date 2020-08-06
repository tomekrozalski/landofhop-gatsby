import { Lang } from 'dashboard/utils/types/form';
import {
  AgedPreviousContent,
  AgedTimeUnit,
  AgedType,
  AgedWood,
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.series]: {
    lang: Lang;
    value: string;
  }[];
  [FieldName.cooperation]:
    | {
        label: string;
        value: string;
      }[]
    | null;
  [FieldName.contract]: {
    label: string;
    value: string;
  } | null;
  [FieldName.place]: {
    label: string;
    value: string;
  } | null;
  [FieldName.tale]: {
    lang: Lang;
    value: string;
  }[];
  // -----------
  [FieldName.fermentation]: string[] | null;
  [FieldName.style]: { lang: Lang; value: string }[];
  [FieldName.extract]: {
    relate: {
      label: string;
      value: ExtractRelate;
    };
    unit: {
      label: string;
      value: ExtractUnit;
    };
    value: number;
  } | null;
  [FieldName.alcohol]: {
    relate: {
      label: string;
      value: AlcoholRelate;
    };
    scope: {
      label: string;
      value: AlcoholScope | string;
    };
    unit: {
      label: string;
      value: AlcoholUnit;
    };
    value: number;
  } | null;
  [FieldName.filtration]: boolean | null;
  [FieldName.pasteurization]: boolean | null;
  [FieldName.aged]: {
    type: AgedType | null;
    wood: AgedWood | null;
    time: {
      unit: {
        label: string;
        value: AgedTimeUnit;
      };
      value: number;
    } | null;
    previousContent:
      | {
          label: string;
          value: AgedPreviousContent;
        }[]
      | null;
  }[];
  [FieldName.dryHopped]:
    | {
        label: string;
        value: string;
      }[]
    | null;
  [FieldName.expirationDate]: {
    unit: {
      label: string;
      value: ExpirationDateUnit;
    };
    value: number;
  } | null;
};
