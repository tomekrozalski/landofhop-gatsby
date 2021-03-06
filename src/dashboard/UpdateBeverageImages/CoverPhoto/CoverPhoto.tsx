import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { CoverImage, SectionHeader } from 'elements';
import { BeverageImageType } from 'components/BeverageDetails/utils/enums';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import { Navigation } from '..';
import { Aside, SectionWrapper } from './elements';
import { DropZone, Error } from '.';

type Props = {
  updateValues: () => void;
};

const CoverPhoto: React.FC<Props> = ({ updateValues }) => {
  const { badge, brand, photos, shortId } = useContext(BeverageContext);

  const [errors, setErrors] = useState<Blob[]>([]);

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
          <Navigation current={{ badge, brand, shortId }} />
          {errors.length ? (
            <Error size={errors[0].size} type={errors[0].type} />
          ) : null}
        </Aside>
      </SectionWrapper>
    </>
  );
};

export default CoverPhoto;
