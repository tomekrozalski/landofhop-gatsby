import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { StyledLink } from './elements';

type Props = {
  data: TranslatedBeverageTypes;
};

const TileLink: React.FC<Props> = ({
  children,
  data: { badge, brand, shortId },
}) => (
  <StyledLink to={`/details/${shortId}/${brand.badge}/${badge}`}>
    {children}
  </StyledLink>
);

export default TileLink;
