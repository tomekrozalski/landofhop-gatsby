import { serverCall } from 'utils/helpers';

type Props = {
  badge: string;
  brand: string;
  id: string;
  shortId: string;
  token: string;
  updateValues: () => void;
};

const updateOutline = ({
  badge,
  brand,
  id,
  shortId,
  token,
  updateValues,
}: Props) =>
  serverCall({
    path: `beverage/update-cover-outline/${id}/${shortId}/${brand}/${badge}`,
    token,
  }).then(val => {
    fetch(`${process.env.GATSBY}/__refresh`, {
      method: 'POST',
    }).then(() => {
      if (val) {
        updateValues();
      }
    });
  });

export default updateOutline;
