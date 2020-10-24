import { Fermentation as FermentationEnum } from 'components/BeverageDetails/utils/enums';

export type FermentationData = {
  date: string;
  [FermentationEnum.top]: number;
  [FermentationEnum.bottom]: number;
  [FermentationEnum.spontaneous]: number;
};
