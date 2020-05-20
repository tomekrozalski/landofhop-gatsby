import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { FormSection, SubSection } from '../elements';
import {
  Badge,
  Brand,
  Contract,
  Cooperation,
  Name,
  Place,
  Series,
} from '../fields';
import { Footer } from '../elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => (
  <FormSection
    description="dashboard.beverage.labelInfo.description"
    title="dashboard.beverage.labelInfo.title"
  >
    <Badge formName={FormName.beverageLabel} required />
    {/* -------------------------------- */}
    <SubSection title="dashboard.beverage.brandInfo" />
    <Name formName={FormName.beverageLabel} required />
    <Series formName={FormName.beverageLabel} />
    <Brand formName={FormName.beverageLabel} required />
    <Cooperation formName={FormName.beverageLabel} />
    <Contract formName={FormName.beverageLabel} />
    <Place formName={FormName.beverageLabel} />
    <Footer>
      <Button type="submit" disabled={!isValid}>
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </FormSection>
);

export default FormBody;
