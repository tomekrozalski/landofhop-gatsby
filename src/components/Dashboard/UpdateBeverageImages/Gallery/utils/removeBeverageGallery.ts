import { serverCall } from 'utils/helpers';

type Props = {
  badge: string;
  brand: string;
  files: number;
  id: string;
  shortId: string;
  token: string;
};

const removeBeverageGallery = ({
  badge,
  brand,
  files,
  id,
  shortId,
  token,
}: Props) =>
  serverCall({
    method: 'DELETE',
    path: 'beverage/gallery',
    body: JSON.stringify({
      badge,
      brand,
      files,
      id,
      shortId,
    }),
    token,
  });

export default removeBeverageGallery;
