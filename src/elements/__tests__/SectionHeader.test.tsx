import React from 'react';
import { render } from '@testing-library/react';

import SectionHeader from '../SectionHeader';

const headerText = 'Test header text';

test('should render', () => {
  const { getByText } = render(<SectionHeader>{headerText}</SectionHeader>);

  const header = getByText(headerText);

  expect(header).toHaveTextContent('Test header');
});
