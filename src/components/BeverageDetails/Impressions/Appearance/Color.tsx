import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';

const DisplayColor = styled.span<{ color: string }>`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 3px;
  background-color: ${({ color }) => color};
  position: relative;
  top: 3px;
`;

const Color: React.FC = () => {
  const { color } = useContext(BeverageContext);

  return color && color.editorial ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.color" />
      </dt>
      <dd>
        <DisplayColor color={color.editorial} />
      </dd>
    </>
  ) : null;
};

export default Color;
