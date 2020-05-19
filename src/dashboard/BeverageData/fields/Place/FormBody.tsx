import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';
import { City, Country } from '..';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => (
  <SubformWrapper title="dashboard.addNewPlace.title">
    <City formName={FormName.place} required />
    <Country formName={FormName.place} required />

    <Footer>
      <Button type="reset">
        <FormattedMessage id="dashboard.reset" />
      </Button>
      <Button type="submit" disabled={!isValid}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
