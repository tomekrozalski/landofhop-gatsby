import React, { Suspense, useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Canvas } from 'react-three-fiber';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { BeverageImageType } from 'components/BeverageDetails/utils/enums';
import { CoverImage } from 'elements';

import {
  BrokenContainer,
  CanvasWrapper,
  GalleryContent,
  Icon360,
  Spinner,
  Wrapper,
} from '.';

const Gallery: React.FC = () => {
  const { formatMessage } = useIntl();
  const { badge, brand, container, name, photos, shortId } = useContext(
    BeverageContext,
  );

  return (
    <Wrapper>
      {photos && photos.gallery ? (
        <>
          <CoverImage
            badge={badge}
            brand={{ badge: brand.badge, name: brand.name }}
            height={500}
            name={name}
            outline={photos.outlines?.gallery}
            shortId={shortId}
            type={BeverageImageType.container}
            width={220}
          />
          {typeof window !== `undefined` && (
            <CanvasWrapper>
              <Canvas orthographic pixelRatio={window.devicePixelRatio}>
                <ambientLight />
                <Suspense fallback={<Spinner />}>
                  <Icon360 />
                  <GalleryContent
                    badge={badge}
                    brand={brand.badge}
                    shortId={shortId}
                    photos={photos.gallery}
                  />
                </Suspense>
              </Canvas>
            </CanvasWrapper>
          )}
        </>
      ) : (
        <BrokenContainer
          src={`${process.env.PHOTO_SERVER}/broken-${container.type}.svg`}
          alt={formatMessage({ id: 'errors.bevereageDetailsImageNotFound' })}
        />
      )}
    </Wrapper>
  );
};

export default Gallery;
