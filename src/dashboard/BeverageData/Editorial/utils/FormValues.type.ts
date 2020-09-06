import { Lang } from 'dashboard/utils/types/form';
import {
  AgedPreviousContent,
  AgedTimeUnit,
  AgedType,
  AgedWood,
  AlcoholScope,
  BeverageType,
  Clarity,
  Currency,
  ExpirationDateUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  // -----------
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
  [FieldName.remark]: { lang: Lang; value: string }[];
  // -----------
  [FieldName.beverageType]: BeverageType | null;
  [FieldName.fermentation]: string[] | null;
  [FieldName.style]: { lang: Lang; value: string }[];
  [FieldName.alcoholScope]: {
    label: string;
    value: AlcoholScope | string;
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
  // -----------
  [FieldName.color]: string | null;
  [FieldName.clarity]: {
    label: string;
    value: Clarity;
  } | null;
  // -----------
  [FieldName.price]: {
    currency: {
      label: string;
      value: Currency;
    };
    date: string;
    value: number;
  }[];
  [FieldName.added]: string | null;
  [FieldName.updated]: string | null;
  [FieldName.notes]: string | null;
};
