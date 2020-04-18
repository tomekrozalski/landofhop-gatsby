import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { CapImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';

import { CapFrame, SectionWrapper } from './elements';
import { DropZone, Error, RemoveCap } from '.';

type Props = {
  updateValues: () => void;
};

const Cap: React.FC<Props> = ({ updateValues }) => {
  const [errors, setErrors] = useState<Blob[]>([]);
  const { badge, brand, photos, shortId } = useContext(BeverageContext);

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="dashboard.updateBeverageImages.cap" />
      </SectionHeader>
      <SectionWrapper>
        <CapFrame>
          {photos?.cap && (
            <>
              <CapImage badge={badge} brand={brand} shortId={shortId} hasTail />
              <RemoveCap updateValues={updateValues} />
            </>
          )}
        </CapFrame>
        <CapFrame active>
          <DropZone setErrors={setErrors} updateValues={updateValues} />
        </CapFrame>
        {errors.length ? (
          <Error size={errors[0].size} type={errors[0].type} />
        ) : null}
      </SectionWrapper>
    </>
  );
};

export default Cap;
