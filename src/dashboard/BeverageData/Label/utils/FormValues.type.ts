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
  [FieldName.brand]:
    | {
        label: string;
        value: string;
      }
    | string;
  [FieldName.cooperation]:
    | {
        label: string;
        value: string;
      }[]
    | null;
  [FieldName.contract]:
    | {
        label: string;
        value: string;
      }
    | string
    | null;
  [FieldName.place]:
    | {
        label: string;
        value: string;
      }
    | string
    | null;
  [FieldName.tale]:
    | {
        lang: Lang;
        value: string;
      }[]
    | [];
  [FieldName.barcode]: string | null;

  [FieldName.container]: {
    color: {
      label: string;
      value: ContainerColor;
    };
    hasCapWireFlip: boolean;
    material: {
      label: string;
      value: ContainerMaterial;
    };
    type: {
      label: string;
      value: ContainerType;
    };
    unit: {
      label: string;
      value: ContainerUnit;
    };
    value: number;
  };
};
