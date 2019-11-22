import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { getValueByLanguage } from 'utils/helpers';

const Broken = styled.img`
  height: 28rem;
  transition: transform var(--transition-default);
  fill: var(--color-bright);
`;

const Image = ({ brand, coverPhoto, name }) => {
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
    <Broken src={coverPhoto.publicURL} alt={imageTitle} />
  );
};

Image.propTypes = {
  brand: shape({
    badge: string.isRequired,
    name: arrayOf(
      shape({
        language: string,
        value: string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  coverPhoto: shape({}).isRequired,
  name: arrayOf(
    shape({
      language: string,
      value: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Image;
