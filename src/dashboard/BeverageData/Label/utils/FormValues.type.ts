import { Lang } from 'dashboard/utils/types/form';
import {
  AgedPreviousContent,
  AgedTimeUnit,
  AgedType,
  AgedWood,
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  ContainerColor,
  ContainerMaterial,
  ContainerType,
  ContainerUnit,
  Currency,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  IngredientType,
  TemperatureUnit,
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
  [FieldName.tale]: {
    lang: Lang;
    value: string;
  }[];
  [FieldName.barcode]: string | null;
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
  [FieldName.ingredientsDescription]: {
    language: {
      label: string;
      value: string;
    };
    value: string;
    complete: boolean;
  }[];
  [FieldName.ingredientsList]:
    | {
        label: string;
        value: string;
        type: IngredientType;
      }[]
    | null;
  [FieldName.smokedMalt]: boolean | null;
  // -----------
  [FieldName.bitterness]: number | null;
  [FieldName.sweetness]: number | null;
  [FieldName.fullness]: number | null;
  [FieldName.power]: number | null;
  [FieldName.hoppyness]: number | null;
  [FieldName.temperature]: {
    from: number;
    to: number;
    unit: {
      label: string;
      value: TemperatureUnit;
    };
  } | null;
  // -----------
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
  [FieldName.price]: {
    currency: {
      label: string;
      value: Currency;
    };
    date: string;
    value: number;
  }[];
};
