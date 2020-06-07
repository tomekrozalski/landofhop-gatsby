import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { CountryFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';
import { Code, Name } from '..';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewCountry.title">
    <Code
      fieldName={CountryFieldNames.code}
      formName={FormName.country}
      required
    />
    <Name
      fieldName={CountryFieldNames.name}
      formName={FormName.country}
      required
    />
    <Footer>
      <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
        <FormattedMessage id="dashboard.add" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
