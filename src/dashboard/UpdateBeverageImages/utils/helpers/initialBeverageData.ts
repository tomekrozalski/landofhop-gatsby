import { ContainerType } from 'components/BeverageDetails/utils/enums';

const initialBeverageData = {
  id: 'test-id',
  shortId: 'test-shortId',
  badge: 'test-badge',
  name: {
    value: 'test-name',
  },
  brand: {
    badge: 'test-brand-badge',
    name: {
      value: 'test-brand-name',
    },
    shortId: 'test-brand-shortId',
  },
  container: {
    type: ContainerType.bottle,
  },
};

export default initialBeverageData;
