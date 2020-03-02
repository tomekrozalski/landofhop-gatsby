import { getMonth, getYear } from 'date-fns';

import { MonthData, RawData } from '../types';
import { generateMonthArray } from '.';


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

		const newArr = [...acc];
		newArr[index].beverages = newArr[index].beverages + curr.beverages;
		return newArr;
	}, generateMonthArray());

	return formattedValues;
};

export default normalizeData;
