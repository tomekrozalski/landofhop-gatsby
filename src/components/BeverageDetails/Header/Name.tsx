import React, { useContext } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';

const Wrapper = styled.h1<{ lang: any }>`
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const Name: React.FC = () => {
  const { locale } = useIntl();
  const { name } = useContext(BeverageContext);
  const { language, value } = getValueByLanguage(name, locale);

  return <Wrapper lang={getLangAttr(language)}>{value}</Wrapper>;
};

export default Name;
