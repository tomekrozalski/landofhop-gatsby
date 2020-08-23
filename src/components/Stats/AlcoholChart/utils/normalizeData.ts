import isNumber from 'lodash/isNumber';
import round from 'lodash/round';

import { AlcoholData, RawData } from '../types';

const normalizeData = (values: RawData): AlcoholData[] => {
  const alcoholValues = values.allBeverage.edges
    .map(({ node }) => {
      const label = node?.alcohol?.label?.value;

      if (isNumber(label)) {
        return label;
      }

      const producer = node?.alcohol?.producer?.value;

      if (isNumber(producer)) {
        return producer;
      }

      return false;
    })
    .filter(val => isNumber(val)) as number[];

  const domain: {
    beverages: number;
    value: number;
  }[] = [];

  const max = Math.max(...alcoholValues) + 1;

  for (let value = 0; value <= max; value = round(value + 0.1, 1)) {
    domain.push({
      beverages: 0,
      value,
    });
  }

  alcoholValues.forEach(alcohol => {
    const match = domain.find(({ value }) => value === alcohol);

    if (match && isNumber(match.beverages)) {
      match.beverages += 1;
    }
  });

  return domain;
};

export default normalizeData;
