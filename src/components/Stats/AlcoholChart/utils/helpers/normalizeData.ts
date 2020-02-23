import get from 'lodash/get';

import { AlcoholRelate, AlcoholUnit } from 'utils/enums/beverage';
import { AlcoholData } from '../types';

type Node = {
	node: {
		alcohol: {
			label: {
				relate: AlcoholRelate
				unit: AlcoholUnit
				value: number
			} | null
			producer: {
				relate: AlcoholRelate
				unit: AlcoholUnit
				value: number
			} | null
		} | null
	}
}

type Props = {
	allBeverage: {
		edges: Node[]
	}
}

const getData = (values: Props): AlcoholData[] => {
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
