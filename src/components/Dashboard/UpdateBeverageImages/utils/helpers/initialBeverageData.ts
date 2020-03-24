import { ContainerType } from 'utils/enums/beverage';

const initialBeverageData = {
  id: 'test-id',
  shortId: 'test-shortId',
  badge: 'test-badge',
  name: {
    language: null,
    value: 'test-name',
  },
  brand: {
    badge: 'test-brand-badge',
    name: {
      language: null,
      value: 'test-brand-name',
    },
    shortId: 'test-brand-shortId',
    website: null,
    consortium: null,
  },
  photos: null,
  container: {
    type: ContainerType.bottle,
  },
  setFetchedBeverage: ({}) => {},
};

export default initialBeverageData;
