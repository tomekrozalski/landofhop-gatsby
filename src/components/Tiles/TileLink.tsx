import React from 'react';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { StyledLink } from './elements';

const TileLink: React.FC<BeverageBasicsTranslatedTypes> = ({ badge, brand, children, shortId }) => (
  <StyledLink to={`/details/${shortId}/${brand.badge}/${badge}`}>
    {children}
  </StyledLink>
);

export default TileLink;
