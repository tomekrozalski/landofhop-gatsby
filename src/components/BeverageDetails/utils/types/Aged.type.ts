import {
  AgedPreviousContent,
  AgedTimeUnit,
  AgedType,
  AgedWood,
} from '../enums';

export type Aged = {
  type: AgedType | null;
  wood: AgedWood | null;
  time: {
    value: number;
    unit: AgedTimeUnit;
  } | null;
  previousContent: AgedPreviousContent[] | null;
};
