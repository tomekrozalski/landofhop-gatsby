import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageImageType } from 'utils/enums/beverage';
import { AuthenticationContext } from 'utils/contexts';
import { Button, CoverImage, SectionHeader } from 'elements';
import { BeverageContext } from '../UpdateBeverageImages';
import { Frame } from '../elements';
import {
  removeBeverageGallery,
  saveImagesBeverageGallery,
  updateOutline,
} from './utils';
import { ButtonsWrapper, Footer, SectionWrapper } from './elements';
import { DropZone, Errors, SavedFiles } from '.';

type Props = {
  updateValues: () => void;
};

const Gallery: React.FC<Props> = ({ updateValues }) => {
  const { token } = useContext(AuthenticationContext);
  const { badge, brand, id, photos, shortId } = useContext(BeverageContext);

  const [isSubmitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<File[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [savedFiles, setSavedFiles] = useState<string[]>([]);

  useEffect(() => {
    if (!photos?.gallery) {
      setSavedFiles([]);
    } else {
      setSavedFiles(
        new Array(photos.gallery).fill('').map((_, i) => {
          const validIndex = i + 1;
          return validIndex < 10 ? `0${validIndex}.jpg` : `${validIndex}.jpg`;
        }),
      );
    }
  }, [photos]);

  const onAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitting(true);

    saveImagesBeverageGallery({
      badge,
      brand: brand.badge,
      files,
      id,
      shortId,
      token,
    }).then(() => {
      updateOutline({
        badge,
        brand: brand.badge,
        id,
        shortId,
        token,
      })
        .then(updateValues)
        .then(() => {
          setFiles([]);
          setSubmitting(false);
        });
    });
  };

  const onRemove = () => {
    if (savedFiles.length) {
      removeBeverageGallery({
        badge,
        brand: brand.badge,
        files: savedFiles.length,
        id,
        shortId,
        token,
      })
        .then(updateValues)
        .then(() => {
          setFiles([]);
        });
    }
  };

  return (
    <>
      <SectionHeader>
        <FormattedMessage id="dashboard.updateBeverageImages.gallery" />
      </SectionHeader>
      <SectionWrapper>
        <div>
          <Frame>
            {savedFiles.length ? (
              <CoverImage
                badge={badge}
                brand={{ badge: brand.badge, name: brand.name }}
                hasTail
                height={500}
                name={brand.name}
                shortId={shortId}
                type={BeverageImageType.container}
                width={220}
              />
            ) : null}
            {files.length ? (
              <img alt="" src={URL.createObjectURL(files[0])} />
            ) : null}
          </Frame>
        </div>
        <div>
          <Frame
            dangerouslySetInnerHTML={{
              __html: photos?.outlines?.gallery || '',
            }}
          ></Frame>
        </div>
        <Frame active gallery>
          {savedFiles.length ? (
            <SavedFiles files={savedFiles} />
          ) : (
            <DropZone files={files} setErrors={setErrors} setFiles={setFiles} />
          )}
        </Frame>
      </SectionWrapper>
      <Footer>
        <Errors errors={errors} />
        <ButtonsWrapper>
          <Button
            disabled={(!files.length && !savedFiles.length) || isSubmitting}
            onClick={onRemove}
            type="reset"
          >
            <FormattedMessage id="dashboard.updateBeverageImages.remove" />
          </Button>
          <Button
            disabled={!files.length}
            isSubmitting={isSubmitting}
            onClick={onAdd}
            type="submit"
          >
            <FormattedMessage id="dashboard.updateBeverageImages.add" />
          </Button>
        </ButtonsWrapper>
      </Footer>
    </>
  );
};

export default Gallery;
