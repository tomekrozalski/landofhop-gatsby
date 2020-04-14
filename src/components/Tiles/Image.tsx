import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { CoverImage } from 'elements';
import { BeverageImageType } from 'components/BeverageDetails/utils/enums';
import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { BrokenContainer } from './elements';

const Image: React.FC<TranslatedBeverageTypes> = ({
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
      outline={photos.outlines?.cover}
      shortId={shortId}
      type={BeverageImageType.cover}
      width={photos?.cover?.width}
    />
  ) : (
    <BrokenContainer
      src={`${process.env.PHOTO_SERVER}/broken-${container.type}.svg`}
      alt={formatMessage({ id: 'errors.tileImageNotFound' })}
    />
  );
};

export default Image;
