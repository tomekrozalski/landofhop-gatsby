import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { Servers } from 'utils/enums';
import { CoverImage } from 'elements';
import { BrokenContainer } from './elements';

const Image: React.FC<BeverageBasicsTranslatedTypes> = props => {
  const { formatMessage } = useIntl();

  return props.photos?.cover ? <CoverImage {...props} /> : (
    <BrokenContainer
      src={`${Servers.images}/broken-${props.container.type}.svg`}
      alt={formatMessage({ id: 'errors.tileImageNotFound' })}
    />
  );
}

export default Image;
