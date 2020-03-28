import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { CapImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';

import { CapFrame, SectionWrapper } from './elements';
import { DropZone } from '.';

const Cap: React.FC = () => {
  const [errors, setErrors] = useState<Blob[]>([]);
  const { badge, brand, photos, shortId } = useContext(BeverageContext);

  const updateValues = () => {};

  console.log('errors', errors);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="dashboard.updateBeverageImages.cap" />
      </SectionHeader>
      <SectionWrapper>
        <CapFrame>
          {photos?.cap && (
            <CapImage badge={badge} brand={brand} shortId={shortId} hasTail />
          )}
        </CapFrame>
        <CapFrame active>
          <DropZone setErrors={setErrors} updateValues={updateValues} />
        </CapFrame>
      </SectionWrapper>
    </>
  );
};

export default Cap;
