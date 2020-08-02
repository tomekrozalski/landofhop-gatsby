import React, { useContext, useState } from 'react';
import { navigate } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Button } from 'elements';
import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';

const RemoveBeverage: React.FC = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);
  const { token } = useContext(AuthenticationContext);
  const { id } = useContext(BeverageContext);

  const removeCall = () => {
    setSubmitting(true);

    serverCall({
      path: 'beverage',
      method: 'DELETE',
      body: JSON.stringify({ id }),
      token,
    })
      .then(values => {
        console.log('values', values);

        // fetch(`${process.env.GATSBY}/__refresh`, {
        //   method: 'POST',
        // }).then(() => {
        //   navigate('/');
        // });
      })
      .catch(() => {
        setSubmitting(false);
      });
  };

  return (
    <Button
      appearance="moveBack"
      isSubmitting={isSubmitting}
      onClick={() => (ready ? removeCall() : setReady(true))}
    >
      <FormattedMessage
        id={`beverage.details.adminBar.${
          ready ? 'confirmationToRemove' : 'removeBeverage'
        }`}
      />
    </Button>
  );
};

export default RemoveBeverage;
