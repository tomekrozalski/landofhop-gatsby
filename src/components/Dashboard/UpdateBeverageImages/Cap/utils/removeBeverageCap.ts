import { serverCall } from 'utils/helpers';

type Props = {
  badge: string;
  brand: string;
  id: string;
  shortId: string;
  token: string;
};

const removeBeverageCap = ({ badge, brand, id, shortId, token }: Props) =>
  serverCall({
    method: 'DELETE',
    path: 'beverage/cap',
    body: JSON.stringify({
      badge,
      brand,
      id,
      shortId,
    }),
    token,
  });

export default removeBeverageCap;
