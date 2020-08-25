import { ContainerType as ContainerTypeEnum } from 'components/BeverageDetails/utils/enums';

export type AddData = {
  date: Date;
  total: number;
  [ContainerTypeEnum.bottle]: number;
  [ContainerTypeEnum.can]: number;
};
