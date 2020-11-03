import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const StyledLink = styled(Link)`
  width: var(--size-input-height);
  height: var(--size-input-height);
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  ::before,
  ::after {
    display: block;
    border-radius: 50%;
    content: '';
    transition: background-color var(--transition-default);
  }

  ::before {
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
  }

  ::after {
    width: 1rem;
    height: 1rem;
    background-color: var(--color-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :hover {
    ::before {
      background-color: var(--color-bright);
    }
    ::after {
      background-color: var(--color-black);
    }
  }
`;

type Props = {
  link: string;
};

const BackToDetails: React.FC<Props> = ({ link }) => (
  <StyledLink to={link}>BackToDetails</StyledLink>
);

export default BackToDetails;
