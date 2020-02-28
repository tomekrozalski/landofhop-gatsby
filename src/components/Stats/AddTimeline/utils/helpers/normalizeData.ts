import { getMonth, getYear } from 'date-fns';

import { MonthData, RawData } from '../types';

const normalizeData = (values: RawData): MonthData[] => {
	const valuesAsMonths = values.allBeverage.edges.map(({ node }) => ({
		beverages: 1,
		month: getMonth(new Date(node.added)),
		year: getYear(new Date(node.added)),
	}));

	const formattedValues = valuesAsMonths.reduce((acc: MonthData[], curr: MonthData) => {
		const index = acc.findIndex((obj: MonthData) =>
			obj.year === curr.year && obj.month === curr.month
		);

		if (index < 0) {
			return [...acc, curr]
		} else {
			const newArr = [...acc];
			newArr[index].beverages = newArr[index].beverages + curr.beverages;
			return newArr;
		}
	}, []).sort((a: MonthData, b: MonthData) => {
		if (a.year !== b.year) {
			return a.year < b.year ? -1 : 1;
		}

		return a.month < b.month ? -1 : 1;
	});

	return formattedValues;
};

export default normalizeData;
