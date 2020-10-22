import { RawData, TopBrandsData } from '../types';

type Props = {
  values: RawData;
  limit: number;
};

const normalizeData = ({ limit, values }: Props): TopBrandsData[] => {
  const brandsArr = values.allBeverage.edges.map(({ node }) => node.brand);

  const counted = brandsArr.reduce(
    (acc: any, { id, name }) => ({
      ...acc,
      [id]: {
        name,
        amount: acc[id] ? acc[id].amount + 1 : 1,
      },
    }),
    {},
  );

  const sorted = Object.entries(counted)
    .map(([id, data]: [string, any]) => ({
      id,
      ...data,
    }))
    .sort((a, b) => {
      return a.amount > b.amount ? -1 : 1;
    });

  return sorted.slice(0, limit);
};

export default normalizeData;
