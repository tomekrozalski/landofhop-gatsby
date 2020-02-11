import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { StyledLink } from './elements';

const TileLink: React.FC<TranslatedBeverageTypes> = ({ badge, brand, children, shortId }) => (
  <StyledLink to={`/details/${shortId}/${brand.badge}/${badge}`}>
    {children}
  </StyledLink>
);

export default TileLink;
