import { DataLanguage } from 'utils/enums';

export type Lang =
  | {
      label?: DataLanguage | string;
      value: string;
    }
  | string;
