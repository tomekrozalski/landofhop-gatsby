import get from 'lodash/get';
import isNumber from 'lodash/isNumber';

import { AlcoholData, RawData } from '../types';

const normalizeData = (values: RawData): AlcoholData[] => {
  const alcoholValues = values.allBeverage.edges
    .map(({ node }) => {
      const labelValue = get(node, 'alcohol.label.value');
      if (isNumber(labelValue)) {
        return {
          beverages: 1,
          value: labelValue,
        };
      }

      const producerValue = get(node, 'alcohol.producer.value');
      if (isNumber(producerValue)) {
        return {
          beverages: 1,
          value: producerValue,
        };
      }

      return false;
    })
    .filter(val => val) as AlcoholData[];

  const formattedValues = alcoholValues
    .reduce((acc: AlcoholData[], curr: AlcoholData) => {
      const index = acc.findIndex(
        (obj: AlcoholData) => obj.value === curr.value,
      );

      if (index < 0) {
        return [...acc, curr];
      }

      const newArr = [...acc];
      // eslint-disable-next-line operator-assignment
      newArr[index].beverages = newArr[index].beverages + curr.beverages;
      return newArr;
    }, [])
    .sort((a: AlcoholData, b: AlcoholData) => (a.value < b.value ? -1 : 1));

  return formattedValues;
};

export default normalizeData;
