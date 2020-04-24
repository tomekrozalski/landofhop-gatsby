import React from 'react';
import styled from 'styled-components';
import { components } from 'react-select';

import { Danger as Icon } from 'elements/icons';
import { EnhancedOptions } from './styles';

const Wrapper = styled.div<{ color: string; hoverColor: string }>`
  display: flex;
  align-items: center;
  padding: 0 5px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;

  svg {
    width: 1rem;

    path {
      fill: ${({ color }) => color};
      transition: fill var(--transition-default);
    }
  }

  &:hover svg path {
    fill: ${({ hoverColor }) => hoverColor};
  }
`;

const MultiValueRemove: React.FC<EnhancedOptions> = props => {
  const getColor = () => {
    switch (props.data.type) {
      case 'hop':
      case 'malt':
      case 'appendix':
        return 'var(--color-white)';
      default:
        return 'var(--color-black)';
    }
  };

  const getHoverColor = () => {
    switch (props.data.type) {
      case 'hop':
      case 'malt':
      case 'appendix':
        return 'var(--color-black)';
      default:
        return 'var(--color-white)';
    }
  };

  return (
    <components.MultiValueRemove {...props}>
      <Wrapper color={getColor()} hoverColor={getHoverColor()}>
        <Icon />
      </Wrapper>
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
