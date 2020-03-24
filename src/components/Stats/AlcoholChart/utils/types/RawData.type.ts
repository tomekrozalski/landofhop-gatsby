import { AlcoholRelate, AlcoholUnit } from 'utils/enums/beverage';

export type RawData = {
  allBeverage: {
    edges: {
      node: {
        alcohol: {
          label: {
            relate: AlcoholRelate;
            unit: AlcoholUnit;
            value: number;
          } | null;
          producer: {
            relate: AlcoholRelate;
            unit: AlcoholUnit;
            value: number;
          } | null;
        } | null;
      };
    }[];
  };
};
