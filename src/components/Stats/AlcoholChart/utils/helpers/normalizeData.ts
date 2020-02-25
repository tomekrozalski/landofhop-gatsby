import get from 'lodash/get';
import isNumber from 'lodash/isNumber';

import { AlcoholData, RawData } from '../types';

const getData = (values: RawData): AlcoholData[] => {
	const alcoholValues = values.allBeverage.edges.map(({ node }) => {
		const labelValue = get(node, 'alcohol.label.value');
		if (isNumber(labelValue)) {
			return labelValue;
		}

		const producerValue = get(node, 'alcohol.producer.value');
		if (isNumber(producerValue)) {
			return producerValue;
		}

		return null;
	}).filter(val => isNumber(val));

	const formattedValues = alcoholValues.reduce((acc, curr) => {
		const index = acc.findIndex((obj: AlcoholData) =>
			obj.value === curr
		);

		if (index < 0) {
			return [...acc, { value: curr, beverages: 1 }]
		} else {
			const newArr = [...acc];
			newArr[index].beverages = newArr[index].beverages + 1;
			return newArr;
		}
	}, []).sort((a: AlcoholData, b: AlcoholData) => a.value < b.value ? -1 : 1);

	return formattedValues;
};

export default getData;
