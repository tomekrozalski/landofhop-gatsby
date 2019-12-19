import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import { BrokenContainer } from 'elements';

type Props = {
  brand: {
    badge: string
    name: LanguageValue[]
  }
  coverPhoto: {
    childImageSharp?: GatsbyImageProps
    publicURL: string
  }
  name: LanguageValue[]
}

const Image: React.FC<Props> = ({ brand, coverPhoto, name }) => {
  const { locale } = useIntl();

  const formattedBrand = getValueByLanguage(brand.name, locale);
  const formattedName = getValueByLanguage(name, locale);
  const imageTitle = `${formattedName.value}, ${formattedBrand.value}`;

  return coverPhoto.childImageSharp ? (
    <Img
      fluid={coverPhoto.childImageSharp.fluid}
      alt={imageTitle}
      imgStyle={{
        transition: 'var(--transition-default)',
      }}
    />
  ) : (
      <BrokenContainer
        src={coverPhoto.publicURL}
        alt={imageTitle}
      />
    );
};

export default Image;
