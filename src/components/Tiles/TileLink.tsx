import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { StyledLink } from './elements';

type Props = {
  data: TranslatedBeverageTypes;
  missing: boolean;
};

const TileLink: React.FC<Props> = ({
  missing,
  children,
  data: { badge, brand, shortId },
}) =>
  missing ? (
    <StyledLink
      to="details"
      state={{ badge, brand: brand.badge, shortId }}
      missing
    >
      {children}
    </StyledLink>
  ) : (
    <StyledLink to={`/details/${shortId}/${brand.badge}/${badge}`}>
      {children}
    </StyledLink>
  );

export default TileLink;
