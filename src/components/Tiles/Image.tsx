import React from 'react';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { getValueByLanguage } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import SiteLanguage from 'utils/enums/SiteLanguage.enum';
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
  const formattedBrand = getValueByLanguage(brand.name, SiteLanguage.pl);
  const formattedName = getValueByLanguage(name, SiteLanguage.pl);
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
