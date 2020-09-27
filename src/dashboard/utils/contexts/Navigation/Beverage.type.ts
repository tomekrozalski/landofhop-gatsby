import {
  AlcoholRelate,
  AlcoholScope,
  AlcoholUnit,
  BeverageType as BeverageTypeEnum,
  Clarity,
  ContainerColor,
  ContainerMaterial,
  ContainerUnit,
  ContainerType,
  ExpirationDateUnit,
  ExtractRelate,
  ExtractUnit,
  Fermentation,
  IngredientType,
  TemperatureUnit,
} from 'components/BeverageDetails/utils/enums';
import { Aged, BeveragePrice } from 'components/BeverageDetails/utils/types';
import { LanguageValue } from 'dashboard/utils/types';
import { InstitutionType as Institution, PlaceType as Place } from '..';

export type BeverageType = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue[];
  series?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
  };
  brand: Institution;
  cooperation?: {
    label?: Institution[];
    producer?: Institution[];
    editorial?: Institution[];
  };
  contract?: {
    label?: Institution;
    producer?: Institution;
    editorial?: Institution;
  };
  isContract?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  place?: {
    label?: Place;
    producer?: Place;
    editorial?: Place;
  };
  remark?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
  };
  tale?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
  };
  barcode?: string;
  beverageType?: {
    label?: BeverageTypeEnum;
    producer?: BeverageTypeEnum;
    editorial?: BeverageTypeEnum;
  };
  fermentation?: {
    label?: Fermentation[];
    producer?: Fermentation[];
    editorial?: Fermentation[];
  };
  extract?: {
    label?: {
      relate: ExtractRelate;
      unit: ExtractUnit;
      value: number;
    };
    producer?: {
      relate: ExtractRelate;
      unit: ExtractUnit;
      value: number;
    };
  };
  alcohol?: {
    label?: {
      relate: AlcoholRelate;
      unit: AlcoholUnit;
      value: number;
      scope?: AlcoholScope;
    };
    producer?: {
      relate: AlcoholRelate;
      unit: AlcoholUnit;
      value: number;
      scope?: AlcoholScope;
    };
    editorial?: {
      scope: AlcoholScope;
    };
  };
  filtration?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  pasteurization?: {
    label?: boolean;
    producer?: boolean;
    editorial?: boolean;
  };
  isAged?: {
    label?: true;
    producer?: true;
    editorial?: true;
  };
  aged?: {
    label?: Aged[];
    producer?: Aged[];
    editorial?: Aged[];
  };
  style?: {
    label?: LanguageValue[];
    producer?: LanguageValue[];
    editorial?: LanguageValue[];
  };
  isDryHopped?: {
    label?: true;
    producer?: true;
    editorial?: true;
  };
  dryHopped?: {
    label?: {
      id: string;
      name: LanguageValue[];
      type: IngredientType;
    }[];
    producer?: {
      id: string;
      name: LanguageValue[];
      type: IngredientType;
    }[];
    editorial?: {
      id: string;
      name: LanguageValue[];
      type: IngredientType;
    }[];
  };
  hopRate?: {
    label?: {
      unit: string;
      value: number;
    };
    producer?: {
      unit: string;
      value: number;
    };
  };
  expirationDate?: {
    label?: {
      value: number;
      unit: ExpirationDateUnit;
    };
    producer?: {
      value: number;
      unit: ExpirationDateUnit;
    };
  };
  ingredientsDescription?: {
    label?: {
      complete: boolean;
      language: string;
      value: string;
    }[];
    producer?: {
      complete: boolean;
      language: string;
      value: string;
    }[];
  };
  ingredientsList?: {
    label?: {
      badge: string;
      id: string;
      name: LanguageValue[];
      type: IngredientType;
    }[];
    producer?: {
      badge: string;
      id: string;
      name: LanguageValue[];
      type: IngredientType;
    }[];
  };
  smokedMalt?: {
    label?: boolean;
    producer?: boolean;
  };
  bitterness?: {
    label?: number;
    producer?: number;
  };
  sweetness?: {
    label?: number;
    producer?: number;
  };
  fullness?: {
    label?: number;
    producer?: number;
  };
  power?: {
    label?: number;
    producer?: number;
  };
  hoppyness?: {
    label?: number;
    producer?: number;
  };
  temperature?: {
    label?: {
      from: number;
      to: number;
      unit: TemperatureUnit;
    };
    producer?: {
      from: number;
      to: number;
      unit: TemperatureUnit;
    };
  };
  color?: {
    editorial?: string;
  };
  clarity?: {
    editorial?: Clarity;
  };
  container: {
    color: ContainerColor;
    material: ContainerMaterial;
    unit: ContainerUnit;
    type: ContainerType;
    value: number;
    hasCapWireFlip?: boolean;
    hasCork?: boolean;
  };
  price?: {
    label?: BeveragePrice[];
    producer?: BeveragePrice[];
    editorial?: BeveragePrice[];
  };
  photos?: {
    cap?: boolean;
    gallery?: number;
    outlines?: {
      gallery?: string;
    };
  };
  notes?: string;
  added: Date;
  updated?: Date;
};
