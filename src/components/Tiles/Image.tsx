import React from 'react';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { BrokenContainer } from 'elements';

const Image: React.FC<BeverageBasicsTranslatedTypes> = ({ brand, coverPhoto, name }) => {
  const { formatMessage } = useIntl();

  return coverPhoto.childImageSharp ? (
    <Img
      fluid={coverPhoto.childImageSharp.fluid}
      alt={`${name.value}, ${brand.name.value}`}
      imgStyle={{
        transition: 'var(--transition-default)',
      }}
    />
  ) : (
      <BrokenContainer
        src={coverPhoto.publicURL}
        alt={formatMessage({ id: 'errors.tileImageNotFound' })}
      />
    );
};

export default Image;
