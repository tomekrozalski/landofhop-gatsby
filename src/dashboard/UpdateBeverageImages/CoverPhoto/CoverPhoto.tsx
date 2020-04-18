import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { CoverImage, SectionHeader } from 'elements';
import { BeverageImageType } from 'components/BeverageDetails/utils/enums';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import { Aside, SectionWrapper } from './elements';
import { DropZone, Error, Navigation } from '.';

type Props = {
  next: BeverageBaseTypes;
  previous: BeverageBaseTypes;
  updateValues: () => void;
};

const CoverPhoto: React.FC<Props> = ({ next, previous, updateValues }) => {
  const [errors, setErrors] = useState<Blob[]>([]);

  const { badge, brand, photos, shortId } = useContext(BeverageContext);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="dashboard.updateBeverageImages.coverPhoto" />
      </SectionHeader>
      <SectionWrapper>
        <Frame>
          {photos?.cover && (
            <CoverImage
              badge={badge}
              brand={{ badge: brand.badge, name: brand.name }}
              hasTail
              height={photos?.cover?.height}
              name={brand.name}
              outline={photos?.outlines?.cover}
              shortId={shortId}
              type={BeverageImageType.cover}
              width={photos?.cover?.width}
            />
          )}
        </Frame>
        <Frame
          dangerouslySetInnerHTML={{
            __html: photos?.outlines?.cover || '',
          }}
        ></Frame>
        <Frame active>
          <DropZone setErrors={setErrors} updateValues={updateValues} />
        </Frame>
        <Aside>
          <Navigation
            current={{ badge, brand, shortId }}
            next={next}
            previous={previous}
          />
          {errors.length ? (
            <Error size={errors[0].size} type={errors[0].type} />
          ) : null}
        </Aside>
      </SectionWrapper>
    </>
  );
};

export default CoverPhoto;
