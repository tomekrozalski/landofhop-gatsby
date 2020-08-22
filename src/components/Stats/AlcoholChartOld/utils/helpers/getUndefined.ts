import get from 'lodash/get';

import { RawData } from '../types';

const getUndefined = (values: RawData): number =>
  values.allBeverage.edges
    .map(
      ({ node }) =>
        get(node, 'alcohol.label.value') || get(node, 'alcohol.producer.value'),
    )
    .filter(val => val === undefined).length;

export default getUndefined;
