import { Lang } from 'dashboard/utils/types/form';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
} from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.badge]: string;
  // -----------
  [FieldName.name]: { lang: Lang; value: string }[];
  [FieldName.series]: {
    lang: Lang;
    value: string;
  }[];
  [FieldName.brand]: {
    label: string;
    value: string;
  };
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
  [FieldName.tale]:
    | {
        lang: Lang;
        value: string;
      }[]
    | null;
  [FieldName.barcode]: string | null;

  [FieldName.container]: {
    color: {
      label: string;
      value: ContainerColor;
    } | null;
    hasCapWireFlip: boolean;
    material: {
      label: string;
      value: ContainerMaterial;
    } | null;
    type:
      | {
          label: string;
          value: ContainerType;
        }
      | string;
    unit: {
      label: string;
      value: ContainerUnit;
    } | null;
    value: number;
  };
};
