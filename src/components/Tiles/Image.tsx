import React from 'react';
import styled from 'styled-components';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { getValueByLanguage } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import SiteLanguage from 'utils/enums/SiteLanguage.enum';

const Broken = styled.img`
  height: 28rem;
  margin-top: 4rem;
  transform: scale(1);
  transition: transform var(--transition-default);
  fill: var(--color-bright);
`;

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
      <Broken
        src={coverPhoto.publicURL}
        alt={imageTitle}
      />
    );
};

export default Image;
