import { ContainerType as ContainerTypeEnum } from 'components/BeverageDetails/utils/enums';

export type RawData = {
  allBeverage: {
    edges: {
      node: {
        added: Date;
        container: {
          type: ContainerTypeEnum;
        };
      };
    }[];
  };
};
