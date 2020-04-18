import { serverCall } from 'utils/helpers';

type Props = {
  badge: string;
  brand: string;
  file: Blob;
  id: string;
  shortId: string;
  token: string;
};

const saveBeverageCap = ({ badge, brand, file, id, shortId, token }: Props) => {
  const formData = new FormData();
  formData.append('badge', badge);
  formData.append('brand', brand);
  formData.append('id', id);
  formData.append('image', file);
  formData.append('shortId', shortId);

  return serverCall({
    body: formData,
    formData: true,
    method: 'POST',
    path: 'beverage/cap',
    token,
  });
};

export default saveBeverageCap;
