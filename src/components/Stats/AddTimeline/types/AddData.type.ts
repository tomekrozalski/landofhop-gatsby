import { ContainerType as ContainerTypeEnum } from 'components/BeverageDetails/utils/enums';

export type AddData = {
  date: string;
  [ContainerTypeEnum.bottle]: number;
  [ContainerTypeEnum.can]: number;
};
