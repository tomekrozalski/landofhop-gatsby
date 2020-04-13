import { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { Beverage as BeverageTypes } from 'utils/types';

type Props = {
  badge?: string;
  brand?: string;
  needsAuth?: boolean;
  shortId?: string;
};

const useBeverageDetails = ({
  badge,
  brand,
  needsAuth = false,
  shortId,
}: Props) => {
  const { authenticationStatus } = useContext(AuthenticationContext);

  const [fetchedBeverage, setFetchedBeverage] = useState<BeverageTypes | null>(
    null,
  );

  useEffect(() => {
    if (
      badge &&
      brand &&
      shortId &&
      (!needsAuth ||
        (needsAuth &&
          authenticationStatus === AuthenticationStatusEnum.success))
    ) {
      serverCall({
        path: `beverage/${shortId}/${brand}/${badge}`,
      }).then(setFetchedBeverage);
    }
  }, [authenticationStatus]);

  return fetchedBeverage;
};

export default useBeverageDetails;
