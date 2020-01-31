import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import get from 'lodash/get';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { CoverImage } from 'elements';
import { BrokenContainer } from './elements';

const Image: React.FC<BeverageBasicsTranslatedTypes> = ({
  badge,
  brand,
  photos,
  shortId,
}) => {
  const { formatMessage } = useIntl();

  const height = get(photos, 'cover.height') || 100;
  const width = get(photos, 'cover.width') || 100;

  return (photos && photos.cover) ? (
    <CoverImage
      badge={badge}
      brandBadge={brand.badge}
      shortId={shortId}
      height={height}
      width={width}
    />
  ) : (
      <BrokenContainer
        src="https://land-of-hop-images.s3.eu-central-1.amazonaws.com/broken-bottle.svg"
        alt={formatMessage({ id: 'errors.tileImageNotFound' })}
      />
    )
};

export default Image;
