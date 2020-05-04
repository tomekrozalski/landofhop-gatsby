import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { Header } from 'elements/textPage';

import { City } from '..';
import { Footer } from '../../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => (
  <>
    <Header>
      <FormattedMessage id="dashboard.addNewPlace.title" />
    </Header>

    <City formName={FormName.place} required />

    <Footer>
      <Button type="reset">
        <FormattedMessage id="dashboard.reset" />
      </Button>
      <Button type="submit" disabled={!isValid}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </>
);

export default FormBody;
