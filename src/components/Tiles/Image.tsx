import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { CoverImage } from 'elements';
import { BrokenContainer } from './elements';

const Image: React.FC<BeverageBasicsTranslatedTypes> = ({
  badge,
  brand,
  container,
  name,
  photos,
  shortId,
}) => {
  const { formatMessage } = useIntl();

  return photos?.cover ? (
    <CoverImage
      badge={badge}
      brand={{ badge: brand.badge, name: brand.name }}
      height={photos?.cover?.height}
      name={name}
      shortId={shortId}
      type="cover"
      width={photos?.cover?.width}
    />
  ) : (
      <BrokenContainer
        src={`${process.env.PHOTO_SERVER}/broken-${container.type}.svg`}
        alt={formatMessage({ id: 'errors.tileImageNotFound' })}
      />
    );
}

export default Image;
