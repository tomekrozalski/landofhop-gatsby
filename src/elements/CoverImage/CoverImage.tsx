import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { LanguageValue } from 'utils/types';
import { BeverageImageType } from 'components/BeverageDetails/utils/enums';
import { Stretcher } from '.';

const Wrapper = styled.div<{ loaded: boolean }>`
  width: 100%;
  position: relative;
  overflow: hidden;

  ${({ loaded }) =>
    loaded &&
    `
		svg {
			opacity: 0 !important;
		}
	`}
`;

const Img = styled.img<{ isLoaded: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity var(--transition-default);
`;

const inImageCache = (src: string) => {
  const image = new Image();
  image.src = src;

  return image.complete;
};

type Props = {
  badge: string;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  hasTail?: boolean;
  height?: number;
  name: LanguageValue;
  outline?: string;
  shortId: string;
  type: BeverageImageType;
  width?: number;
};

const CoverImage: React.FC<Props> = ({
  badge,
  brand,
  hasTail = false,
  height,
  name,
  outline,
  shortId,
  type,
  width,
}) => {
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onPictureLoad = () => {
    setLoaded(true);
  };

  const getPath = (format: 'webp' | 'jpg', size: 1 | 2) => {
    const basicPath = `${process.env.PHOTO_SERVER}/${brand.badge}/${badge}/${shortId}`;

    const tail = hasTail ? `?${Date.now()}` : '';

    return type === BeverageImageType.cover
      ? `${basicPath}/${type}/${format}/${size}x.${format}${tail}`
      : `${basicPath}/${type}/${format}/${size}x/01.${format}${tail}`;
  };

  const isBrowser = typeof window !== `undefined`;

  const seenBefore = () => {
    return isBrowser ? inImageCache(getPath('webp', 1)) : null;
  };

  const enhanceOutlineWithStyles = (value: string) => {
    const styles =
      'position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 1; transition: var(--transition-default);';
    return value.replace('<svg', `<svg style="${styles}"`);
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    if (container.current) {
      io.observe(container.current!);
    }
  }, []);

  return (
    <Wrapper loaded={loaded} ref={container}>
      <Stretcher height={height} type={type} width={width} />
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: outline ? enhanceOutlineWithStyles(outline) : '',
        }}
        className="outline-wrapper"
      ></div>
      {isBrowser && visible ? (
        <picture>
          <source
            type="image/webp"
            srcSet={`${getPath('webp', 1)} 1x, ${getPath('webp', 2)} 2x`}
          />
          <source srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`} />
          <Img
            srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`}
            src={getPath('jpg', 1)}
            alt={loaded ? `${name.value}, ${brand.name.value}` : ''}
            onLoad={onPictureLoad}
            isLoaded={seenBefore() || loaded}
          />
        </picture>
      ) : null}
      {!isBrowser ? (
        <noscript
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `<picture><img src="${getPath(
              'jpg',
              1,
            )}" alt="" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center;" /></picture>`,
          }}
        />
      ) : null}
    </Wrapper>
  );
};

export default CoverImage;
