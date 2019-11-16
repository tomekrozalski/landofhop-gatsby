import React from 'react';
import { oneOf } from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { container } from 'utils/constants';

const bounce = () => keyframes`
	0% {
		bottom: 5rem;
	}
	100% {
		bottom: 7rem;
	}
`;

const Svg = styled.svg`
  height: 28rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  fill: var(--color-bright);
  animation: ${bounce} 0.5s ease-in-out 0s infinite alternate;
  z-index: -1;
`;

const Container = ({ type }) => {
  const { bottle, can } = container.types;

  if (type === bottle) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40.7 139"
        className="container-icon"
      >
        <path d="M5.6 138.4c3.1 0.4 8.7 0.6 14.8 0.6 6.1 0 11.7-0.2 14.9-0.6 2.3-0.3 4-2.3 4-4.6V63.2c0-5.6-1.6-10.1-4.9-13.5 -2.4-2.5-2.4-3.2-2.5-9.7C31.7 29.2 29.4 18.2 27.3 8.6c0.3-0.2 0.5-0.5 0.6-0.7 0.8-1.3 0.4-2.9 0.2-3.5l-0.8-3.3C27.2 0.4 26.6 0 25.9 0H14.8c-0.7 0-1.2 0.4-1.4 1.1l-0.8 3.3c-0.2 0.7-0.6 2.2 0.2 3.5 0.2 0.3 0.4 0.5 0.6 0.7 -2.2 9.6-4.4 20.6-4.5 31.4 -0.1 6.5-0.1 7.2-2.5 9.7C3.1 53.2 1.5 57.6 1.5 63.2v70.5C1.5 136.1 3.2 138.1 5.6 138.4z" />
      </Svg>
    );
  }

  if (type === can) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40.7 139"
        className="container-icon"
      >
        <path d="M33.7 139c1.6 0 2.9-1 3.4-2.5 0.3-1.1 0.9-2 1.6-2.3 1.3-0.6 2.1-1.8 2.1-3.2V80.6c0-2.5-0.9-4.9-2.5-7 -0.7-0.9-1.2-2.4-1.4-4.1 -0.1-1.4-1.3-2.5-2.8-2.5H6.7c-1.4 0-2.6 1.1-2.8 2.5C3.8 71.2 3.3 72.7 2.5 73.6 0.9 75.7 0 78.1 0 80.6v50.4c0 1.4 0.8 2.7 2.1 3.2 0.7 0.3 1.3 1.2 1.6 2.3 0.4 1.5 1.8 2.5 3.4 2.5H33.7z" />
      </Svg>
    );
  }

  return null;
};

Container.propTypes = {
  type: oneOf(Object.values(container.types)).isRequired,
};

export default Container;
