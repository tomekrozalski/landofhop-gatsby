import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

const move = () => keyframes`
	0% { background-position: 0 0; }
	100% { background-position:
		var(--size-input-height)
		var(--size-input-height);
	}
`;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    background-image: linear-gradient(
      -45deg,
      var(--color-brightest) 25%,
      var(--color-white) 25%,
      var(--color-white) 50%,
      var(--color-brightest) 50%,
      var(--color-brightest) 75%,
      var(--color-white) 75%,
      var(--color-white)
    );
    background-size: var(--size-input-height) var(--size-input-height);
    animation: ${move} 2s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Loading = () => (
  <Wrapper>
    <FormattedMessage id="dashboard.loading" />
  </Wrapper>
);

export default Loading;
