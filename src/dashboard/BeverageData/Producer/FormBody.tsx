import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { BeverageFieldNames, FormType } from 'dashboard/utils/enums';
import { BeverageContext } from 'dashboard/utils/contexts';
import { FormSection, SubSection } from '../elements';
import {} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => (
  <FormSection
    description="dashboard.beverage.labelInfo.description"
    title="dashboard.beverage.labelInfo.title"
  >
    {/* -------------------------------- */}

    <Footer>
      <Button type="submit" disabled={!isValid}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </FormSection>
);

export default FormBody;
