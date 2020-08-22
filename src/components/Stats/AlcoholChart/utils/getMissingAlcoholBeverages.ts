import isNumber from 'lodash/isNumber';

import { RawData } from '../types';

const getMissingAlcoholBeverages = (values: RawData): number =>
  values.allBeverage.edges
    .map(({ node }) => {
      const label = isNumber(node?.alcohol?.label?.value);
      const producer = isNumber(node?.alcohol?.producer?.value);
      return label || producer;
    })
    .filter(val => !val).length;

export default getMissingAlcoholBeverages;
