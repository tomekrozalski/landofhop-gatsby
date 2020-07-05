import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { Beverage as BeverageType } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { Tile } from '.';

type Props = {
  edges: { node: BeverageType }[];
};

const TileMap: React.FC<Props> = ({ edges }) => {
  const { authenticationStatus } = useContext(AuthenticationContext);
  const [missing, setMissing] = useState<BeverageType[]>([]);

  useEffect(() => {
    if (authenticationStatus === AuthenticationStatusEnum.success) {
      serverCall({
        path: 'beverage/get-last-tiles/60',
      }).then((values: BeverageType[]) => {
        const missing = values.filter(
          ({ id }) => !edges.find(({ node }) => node.id === id),
        );

        console.log('missing', missing);
        setMissing(missing);
      });
    }
  }, [authenticationStatus]);

  return (
    <>
      {missing.length > 0 &&
        missing.map(props => (
          <Tile key={props.id} {...translateBeverage(props)} />
        ))}
      {edges.map(({ node }) => (
        <Tile key={node.id} {...translateBeverage(node)} />
      ))}
    </>
  );
};

export default TileMap;
