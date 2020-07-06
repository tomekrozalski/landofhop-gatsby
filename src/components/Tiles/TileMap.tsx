import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'utils/enums';
import { Spinner } from 'elements';
import { Beverage as BeverageType } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { Tile } from '.';

type Props = {
  edges: { node: BeverageType }[];
};

const TileMap: React.FC<Props> = ({ edges }) => {
  const [missing, setMissing] = useState<BeverageType[]>([]);
  const [status, setStatus] = useState(StatusEnum.idle);
  const { isLoggedIn } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isLoggedIn) {
      setStatus(StatusEnum.pending);

      serverCall({ path: 'beverage/get-last-tiles/60' })
        .then((values: BeverageType[]) => {
          const missing = values.filter(
            ({ id }) => !edges.find(({ node }) => node.id === id),
          );

          setMissing(missing);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [isLoggedIn]);

  return isLoggedIn && status === StatusEnum.pending ? (
    <Spinner />
  ) : (
    <>
      {missing.map(props => (
        <Tile key={props.id} data={translateBeverage(props)} missing />
      ))}
      {edges.map(({ node }) => (
        <Tile key={node.id} data={translateBeverage(node)} />
      ))}
    </>
  );
};

export default TileMap;
