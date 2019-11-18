import React, { useContext, useState } from 'react';
import { arrayOf, shape, string, oneOf } from 'prop-types';
import styled from 'styled-components';

import { container, servers } from 'utils/constants';
import { DeviceContext } from 'utils/contexts';
import { getValueByLanguage } from 'utils/helpers';
import BrokenContainer from './BrokenContainer';
import Container from './Container';

const StyledImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(1);
  transition: transform var(--transition-default);
`;

const Image = ({ badge, brand, containerType, name, shortId }) => {
  const [failure, setFailure] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const { webpSupport } = useContext(DeviceContext);

  const format = webpSupport ? 'webp' : 'jpg';
  const coverPath = `${servers.images}${brand.badge}/${badge}/${shortId}/cover/${format}`;

  const formattedBrand = getValueByLanguage(brand.name, 'pl');
  const formattedName = getValueByLanguage(name, 'pl');

  if (failure) {
    return <BrokenContainer type={containerType} />;
  }

  return (
    <>
      <StyledImage
        alt={`${formattedName.value}, ${formattedBrand.value}`}
        onError={() => setFailure(true)}
        onLoad={() => setLoaded(true)}
        srcSet={`
          ${coverPath}/1x.${format},
          ${coverPath}/2x.${format} 2x,
          ${coverPath}/4x.${format} 4x,
        `}
        src={`${coverPath}/1x.${format}`}
      />
      {!loaded && <Container type={containerType} />}
    </>
  );
};

Image.propTypes = {
  badge: string.isRequired,
  brand: shape({
    badge: string.isRequired,
    name: arrayOf(
      shape({
        language: string,
        value: string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  containerType: oneOf(Object.values(container.types)).isRequired,
  name: arrayOf(
    shape({
      language: string,
      value: string.isRequired,
    }).isRequired
  ).isRequired,
  shortId: string.isRequired,
};

export default Image;
