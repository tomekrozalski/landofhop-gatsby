import React from 'react';
import { useDropzone } from 'react-dropzone';

import { DragAndDropIcon, DropZoneWrapper } from '../elements';
import { config } from './utils';
import { ThumbnailList } from '.';

type Props = {
  files: File[];
  setErrors: (value: File[]) => void;
  setFiles: (values: File[]) => void;
};

const DropZone: React.FC<Props> = ({ files, setErrors, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: config.accept,
    minSize: config.minSize * 1024,
    maxSize: config.maxSize * 1024,
    multiple: true,
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length) {
        setErrors(rejectedFiles);
      } else {
        setErrors([]);
        setFiles(acceptedFiles);
      }
    },
  });

  return (
    <DropZoneWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {files.length ? <ThumbnailList files={files} /> : <DragAndDropIcon />}
    </DropZoneWrapper>
  );
};

export default DropZone;
