import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { getValueByLanguage } from 'utils/helpers';
import LanguageValueType from 'utils/types/LanguageValue.type';

const Broken = styled.img`
  height: 28rem;
  position: absolute;
  bottom: 6rem;
  left: 50%;
  transform: scale(1) translateX(-50%);
  transition: transform var(--transition-default);
  fill: var(--color-bright);
`;

type Props = {
  brand: {
    badge: string
    name: LanguageValueType[]
  }
  coverPhoto: {
    childImageSharp?: {
      fluid: {}
    }
    publicURL: string
  }
  name: LanguageValueType[]
}

const Image: React.FC<Props> = ({ brand, coverPhoto, name }) => {
  const formattedBrand = getValueByLanguage(brand.name, 'pl');
  const formattedName = getValueByLanguage(name, 'pl');
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
        className="icon-broken-container"
        alt={imageTitle}
      />
    );
};

export default Image;
