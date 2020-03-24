import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const TasteWrapper = styled.dl`
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  @media (min-width: ${breakpoints.lg}) {
    flex-basis: 50%;
  }

  dt {
    flex-basis: 40%;
    padding-right: 1rem;
    text-align: right;

    &::first-letter {
      text-transform: uppercase;
    }

    &::after {
      content: ':';
    }
  }

  dd {
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  dd::after {
    display: block;
    content: '';
  }
`;

export default TasteWrapper;
