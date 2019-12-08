import React from 'react';
import styled from 'styled-components';
import Img, { GatsbyImageProps } from 'gatsby-image';

import { getValueByLanguage } from 'utils/helpers';
import LanguageValueType from 'utils/types/LanguageValue.type';
import SiteLanguages from 'utils/enums/SiteLanguages.enum';

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
    name: LanguageValueType[]
  }
  coverPhoto: {
    childImageSharp?: GatsbyImageProps
    publicURL: string
  }
  name: LanguageValueType[]
}

const Image: React.FC<Props> = ({ brand, coverPhoto, name }) => {
  const formattedBrand = getValueByLanguage(brand.name, SiteLanguages.pl);
  const formattedName = getValueByLanguage(name, SiteLanguages.pl);
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
