import React, { useContext } from 'react';

import { BeverageContext } from '../UpdateBeverageImages';
import { ThumbnailListWrapper } from './elements';
import { ThumbnailItem } from '.';

type Props = {
  files: string[];
};

const SavedImages: React.FC<Props> = ({ files }) => {
  const { badge, brand, shortId } = useContext(BeverageContext);

  return (
    <ThumbnailListWrapper>
      {files.map(name => (
        <ThumbnailItem
          key={name}
          name={name.substr(0, name.lastIndexOf('.')) || name}
          src={`${process.env.PHOTO_SERVER}/${
            brand.badge
          }/${badge}/${shortId}/container/jpg/2x/${name}?${Date.now()}`}
        />
      ))}
    </ThumbnailListWrapper>
  );
};

export default SavedImages;
