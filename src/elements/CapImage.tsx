import React from 'react';
import styled from 'styled-components';

import { LanguageValue } from 'utils/types';

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

type Props = {
  badge: string;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  hasTail?: boolean;
  shortId: string;
};

const CapImage: React.FC<Props> = ({
  badge,
  brand,
  hasTail = false,
  shortId,
}) => {
  const getPath = (format: 'webp' | 'jpg', size: 1 | 2) => {
    const basicPath = `${process.env.PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}/cap`;
    const tail = hasTail ? `?${Date.now()}` : '';

    return `${basicPath}/${format}/${size}x.${format}${tail}`;
  };

  return (
    <Wrapper>
      <picture>
        <source
          type="image/webp"
          srcSet={`${getPath('webp', 1)} 1x, ${getPath('webp', 2)} 2x`}
        />
        <source srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`} />
        <Img
          srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`}
          src={getPath('jpg', 1)}
          alt="cap"
        />
      </picture>
    </Wrapper>
  );
};

export default CapImage;
