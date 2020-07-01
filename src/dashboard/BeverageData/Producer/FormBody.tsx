import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames, FormType } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import { Tale } from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => {
  const { setPart } = useContext(NavigationContext);

  const moveBack = (e: React.MouseEvent) => {
    e.preventDefault();

    // saveProducer ?
    setPart(FormName.beverageLabel);
  };

  return (
    <FormSection
      description="dashboard.beverage.producerInfo.description"
      title="dashboard.beverage.producerInfo.title"
    >
      {/* -------------------------------- */}
      <Tale
        fieldName={BeverageFieldNames.tale}
        formName={FormName.beverageProducer}
      />
      {/* -------------------------------- */}
      <Footer>
        <Button
          appearance="moveBack"
          type="submit"
          onClick={moveBack}
          disabled={!isValid}
        >
          <FormattedMessage id="dashboard.saveAndMoveBack" />
        </Button>
        <Button type="submit" disabled={!isValid}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
