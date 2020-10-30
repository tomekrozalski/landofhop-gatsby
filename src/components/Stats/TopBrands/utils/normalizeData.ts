import { add, format, isBefore, max, min } from 'date-fns';

import { TopBrandsData, RawData } from '../types';

type Props = {
  limit: number;
  values: RawData;
};

const getTopBrands = ({ limit, values }: Props) => {
  type AccType = {
    [name: string]: {
      amount: number;
      id: string;
      name: any;
    };
  };

  const accumulator = values.allBeverage.edges.reduce(
    (acc: AccType, { node }) => {
      const { id, name } = node.brand;

      return {
        ...acc,
        [id]: {
          amount: acc[id] ? acc[id].amount + 1 : 1,
          id,
          name,
        },
      };
    },
    {},
  );

  return Object.values(accumulator)
    .sort((a, b) => (a.amount < b.amount ? 1 : -1))
    .slice(0, limit);
};

const normalizeData = ({ limit, values }: Props): TopBrandsData[] => {
  const domain: TopBrandsData[] = [];
  const dates = values.allBeverage.edges.map(
    ({ node }) => new Date(node.added),
  );
  const earliest = min(dates);
  const latest = max(dates);
  const endpoint = new Date(
    `${format(add(latest, { months: 1 }), 'yyyy-MM')}-01`,
  );
  let current = earliest;

  const topBrands = getTopBrands({ limit, values });

  do {
    domain.push({
      date: format(current, 'yyyy-MM'),
      brands: topBrands.map(props => ({
        ...props,
        amount: 0,
      })),
    });

    current = add(current, { months: 1 });
  } while (isBefore(current, endpoint));

  values.allBeverage.edges.forEach(({ node }) => {
    const { brand } = node;

    if (!topBrands.map(({ id }) => id).includes(brand.id)) {
      return false;
    }

    const index = domain.findIndex(
      ({ date }) => date === format(new Date(node.added), 'yyyy-MM'),
    );

    for (let i = index; i < domain.length; i += 1) {
      const selectedBrand = domain[i].brands.find(({ id }) => id === brand.id);
      selectedBrand!.amount += 1;
    }

    return true;
  });

  return domain;
};

export default normalizeData;
