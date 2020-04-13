import React, { useContext } from 'react';

import { BeverageContext } from 'utils/contexts';
import { getValueByLanguage } from 'utils/helpers';
import { ProducerValues, Similar } from '.';

const Ingredients: React.FC = () => {
  const { ingredientsDescription } = useContext(BeverageContext);

  const translatedLabel =
    ingredientsDescription?.label &&
    getValueByLanguage(ingredientsDescription.label);
  const translatedProducer =
    ingredientsDescription?.producer &&
    getValueByLanguage(ingredientsDescription.producer);

  return ingredientsDescription ? (
    <>
      {translatedLabel && (
        <Similar
          label={translatedLabel}
          producer={translatedProducer || null}
        />
      )}
      {translatedLabel && translatedProducer && ' / '}
      {translatedProducer &&
        translatedLabel?.complete !== translatedProducer?.complete && (
          <ProducerValues {...translatedProducer} />
        )}
    </>
  ) : null;
};

export default Ingredients;
