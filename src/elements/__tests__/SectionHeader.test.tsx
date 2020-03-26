import React from 'react';
import { render } from '@testing-library/react';

import SectionHeader from '../SectionHeader';

test('should render', () => {
  const { container, debug } = render(<SectionHeader>Bum!</SectionHeader>);

  debug();

  expect(container).toMatchSnapshot();
  expect(1 + 1).toBe(2);
});
