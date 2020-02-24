import get from 'lodash/get';

import { AlcoholData, RawData } from '../types';

const getData = (values: RawData): AlcoholData[] => {
	const alcoholValues = values.allBeverage.edges.map(({ node }) => (
		get(node, 'alcohol.label.value') || get(node, 'alcohol.producer.value')
	)).filter(val => val !== undefined);

	const formattedValues = alcoholValues.reduce((acc, curr) => {
		const index = acc.findIndex((obj: { value: number, beverages: number }) =>
			obj.value === curr
		);

		if (index < 0) {
			return [...acc, { value: curr, beverages: 1 }]
		} else {
			const newArr = [...acc];
			newArr[index].beverages = newArr[index].beverages + 1;
			return newArr;
		}
	}, []);

	return formattedValues;
};

export default getData;
