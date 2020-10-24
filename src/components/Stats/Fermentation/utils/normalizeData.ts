import { add, format, isBefore, max, min } from 'date-fns';

import { ContainerType as ContainerTypeEnum } from 'components/BeverageDetails/utils/enums';
import { FermentationData, RawData } from '../types';

const normalizeData = (values: RawData): FermentationData[] => {
  const domain: FermentationData[] = [];
  const dates = values.allBeverage.edges.map(
    ({ node }) => new Date(node.added),
  );
  const earliest = min(dates);
  const latest = max(dates);
  const endpoint = new Date(
    `${format(add(latest, { months: 1 }), 'yyyy-MM')}-01`,
  );
  let current = earliest;

  do {
    domain.push({
      date: format(current, 'yyyy-MM'),
      [ContainerTypeEnum.bottle]: 0,
      [ContainerTypeEnum.can]: 0,
    });

    current = add(current, { months: 1 });
  } while (isBefore(current, endpoint));

  values.allBeverage.edges.forEach(({ node }) => {
    const index = domain.findIndex(
      ({ date }) => date === format(new Date(node.added), 'yyyy-MM'),
    );

    domain[index][node.container.type] += 1;
  });

  return domain;
};

export default normalizeData;
