import React, { useContext } from 'react';
import styled from 'styled-components';

import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

const Wrapper = styled.h1<{ lang: any }>`
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Name: React.FC = () => {
  const { name } = useContext(BeverageContext);

  return <Wrapper lang={getLangAttr(name.language)}>{name.value}</Wrapper>;
};

export default Name;
