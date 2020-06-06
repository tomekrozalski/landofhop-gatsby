import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { PlaceFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewCountry.title">
    <p>Fields</p>
    <Footer>
      <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
