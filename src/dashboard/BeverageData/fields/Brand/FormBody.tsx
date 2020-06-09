import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { InstitutionFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';
import { Badge, Name, OwnedBy, Website } from '..';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewInstitution.title">
    <Badge
      connectedFieldName={InstitutionFieldNames.name}
      fieldName={InstitutionFieldNames.badge}
      formName={FormName.institution}
      required
    />
    <Name
      fieldName={InstitutionFieldNames.name}
      formName={FormName.institution}
      required
    />
    <OwnedBy
      fieldName={InstitutionFieldNames.ownedBy}
      formName={FormName.institution}
    />
    <Website
      fieldName={InstitutionFieldNames.website}
      formName={FormName.institution}
    />
    <Footer>
      <Button type="submit" disabled={!isValid} isSubmitting={isSubmitting}>
        <FormattedMessage id="dashboard.add" />
      </Button>
    </Footer>
  </SubformWrapper>
);

export default FormBody;
