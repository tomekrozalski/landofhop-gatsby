import { format } from 'date-fns';

import { ContainerType as ContainerTypeEnum } from 'components/BeverageDetails/utils/enums';
import { AddData, RawData } from '../types';

type AppDataRaw = {
  date: string;
  total: number;
  bottle: number;
  can: number;
};

const normalizeData = (values: RawData): AddData[] => {
  const formattedValues = values.allBeverage.edges.map(({ node }) => ({
    date: format(new Date(node.added), 'yyyy-MM'),
    type: node.container.type,
  }));

  const domain = formattedValues
    .reduce(
      (acc: AppDataRaw[], curr: { date: string; type: ContainerTypeEnum }) => {
        const existing = acc.find(({ date }) => date === curr.date);

        if (existing) {
          return acc.map(props => {
            if (props.date === curr.date) {
              return {
                ...props,
                total: props.total + 1,
                [curr.type]: props[curr.type] + 1,
              };
            }

            return props;
          });
        }

        return [
          ...acc,
          {
            date: curr.date,
            total: 1,
            [ContainerTypeEnum.bottle]:
              curr.type === ContainerTypeEnum.bottle ? 1 : 0,
            [ContainerTypeEnum.can]:
              curr.type === ContainerTypeEnum.can ? 1 : 0,
          },
        ];
      },
      [],
    )
    .sort((a, b) => {
      return a.date < b.date ? -1 : 1;
    })
    .map(props => ({
      ...props,
      date: new Date(props.date),
    }));

  return domain;
};

export default normalizeData;
