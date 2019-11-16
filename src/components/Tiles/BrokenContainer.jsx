import React from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';

import { container } from 'utils/constants';

const Svg = styled.svg`
  height: 28rem;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  fill: var(--color-bright);
`;

const BrokenContainer = ({ type }) => {
  const { bottle, can } = container.types;

  if (type === bottle) {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.7 151.4">
        <path d="M33.1 104.7l-9.4-9.1 -16 7.8 -4.2 39.8c-0.2 2.3 1.2 4.5 3.5 5 3.1 0.7 8.5 1.5 14.7 2.2 6.1 0.6 11.6 1 14.8 0.9 2.3-0.1 4.2-1.9 4.5-4.2l4.7-44.5 -6.8-5.5L33.1 104.7z" />
        <path d="M36.2 48.2c-2.7-2.2-2.8-2.8-3.8-9.3 -1.6-10.7-5.3-21.3-8.7-30.5 0.2-0.2 0.4-0.5 0.5-0.8 0.6-1.4 0-2.9-0.3-3.5l-1.2-3.1c-0.2-0.6-0.9-1-1.5-0.9l-11.1 1.5C9.5 1.6 9 2.1 8.9 2.8L8.6 6.1C8.5 6.8 8.3 8.4 9.3 9.6c0.2 0.3 0.5 0.5 0.7 0.7 -0.9 9.8-1.6 21-0.3 31.8 0.8 6.4 0.9 7.1-1.2 9.9C5.7 55.8 4.7 60.4 5.5 65.9l4.1 30.2 13.6-11.4 11.3 6.6 3.9-8.7 7.9 3.7 -3.5-25.5C42.1 55.3 39.9 51.1 36.2 48.2z" />
      </Svg>
    );
  }

  if (type === can) {
    return (
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.7 151.4">
        <path d="M34.2 122.2l-9.3-11.9 -16 5.7 -3.3 22.6c-0.2 1.4 0.4 2.8 1.6 3.5 0.7 0.4 1.1 1.3 1.3 2.5 0.2 1.5 1.4 2.7 3 3l26.3 3.8c1.5 0.2 3.1-0.6 3.7-2 0.5-1.1 1.2-1.8 1.9-2 1.3-0.4 2.3-1.5 2.5-2.9l3.8-26.3 -5.2-4L34.2 122.2z" />
        <path d="M36.2 67.2c-0.9-0.7-1.7-2.1-2.2-3.7 -0.4-1.4-1.8-2.2-3.2-1.9L4 67.2C2.6 67.5 1.6 68.8 1.8 70.3c0.2 1.7 0 3.2-0.5 4.3 -1.2 2.4-1.6 4.9-1 7.3l5.7 27 13.1-10.8 12.8 8 6.9-11.2 6.3 1.9L40.1 73.5C39.6 71.1 38.2 68.9 36.2 67.2z" />
      </Svg>
    );
  }

  return null;
};

BrokenContainer.propTypes = {
  type: oneOf(Object.values(container.types)).isRequired,
};

export default BrokenContainer;
