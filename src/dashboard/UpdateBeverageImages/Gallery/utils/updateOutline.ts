import { serverCall } from 'utils/helpers';

type Props = {
  badge: string;
  brand: string;
  id: string;
  shortId: string;
  token: string;
};

const updateOutline = ({ badge, brand, id, shortId, token }: Props) =>
  serverCall({
    path: `beverage/update-container-outline/${id}/${shortId}/${brand}/${badge}`,
    token,
  }).then(() => {
    fetch(`${process.env.GATSBY}/__refresh`, {
      method: 'POST',
    });
  });

export default updateOutline;
