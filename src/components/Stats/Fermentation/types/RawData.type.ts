import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';

export type RawData = {
  allBeverage: {
    edges: {
      node: {
        added: Date;
        fermentation: {
          editorial: FermentationEnum[] | null;
          label: FermentationEnum[] | null;
          producer: FermentationEnum[] | null;
        } | null;
      };
    }[];
  };
};
