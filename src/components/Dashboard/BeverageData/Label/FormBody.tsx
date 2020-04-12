import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { FormSection, SubSection } from '../elements';
import { Badge, Name, Series } from '../fields';
import { Footer } from '../elements/grids';
// eslint-disable-next-line import/named
import { FormValues, FieldName } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({ isValid }) => {
  const common = {
    formName: FormName.beverageLabel,
  };

  return (
    <FormSection
      description="dashboard.beverage.labelInfo.description"
      title="dashboard.beverage.labelInfo.title"
    >
      <Badge {...common} fieldName={FieldName.badge} required />
      {/* -------------------------------- */}
      <SubSection title="dashboard.beverage.brandInfo" />
      <Name {...common} fieldName={FieldName.name} required />
      <Series {...common} fieldName={FieldName.series} />
      <Footer>
        <Button type="reset">
          <FormattedMessage id="dashboard.reset" />
        </Button>
        <Button type="submit" disabled={!isValid}>
          <FormattedMessage id="dashboard.continue" />
        </Button>
      </Footer>
    </FormSection>
  );
};

export default FormBody;
