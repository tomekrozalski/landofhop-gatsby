import React, { useContext, useState } from 'react';
import { arrayOf, shape, string, oneOf } from 'prop-types';
import styled from 'styled-components';

import { container, servers } from 'utils/constants';
import { DeviceContext } from 'utils/contexts';
import BrokenContainer from './BrokenContainer';

const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scale(1);
  transition: transform var(--transition-default);
`;

const Image = ({ badge, brand, containerType, shortId }) => {
  const [failure, setFailure] = useState(false);

  const { webpSupport } = useContext(DeviceContext);

  const format = webpSupport ? 'webp' : 'jpg';
  const coverPath = `${servers.images}${brand.badge}/${badge}/${shortId}/cover/${format}`;

  const formattedBrand = 'formattedBrand';
  const formattedName = 'formattedName';

  if (failure) {
    return <BrokenContainer type={containerType} />;
  }

  return (
    <StyledImage
      alt={`${formattedName}, ${formattedBrand}`}
      onError={() => setFailure(true)}
      srcSet={`
        ${coverPath}/1x.${format},
        ${coverPath}/2x.${format} 2x,
        ${coverPath}/4x.${format} 4x,
      `}
      src={`${coverPath}/1x.${format}`}
    />
  );
};

Image.propTypes = {
  badge: string.isRequired,
  brand: shape({
    badge: string.isRequired,
    name: arrayOf(
      shape({
        language: string.isRequired,
        value: string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  containerType: oneOf(Object.values(container.types)).isRequired,
  shortId: string.isRequired,
};

export default Image;
