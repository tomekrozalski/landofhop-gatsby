import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { FormikProps } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { LanguageFieldNames } from 'dashboard/utils/enums';
import { SubformWrapper } from 'dashboard/BeverageData/elements';
import { Code, Name } from 'dashboard/BeverageData/fields';
import { Footer } from 'dashboard/BeverageData/elements/grids';
import { FormValues } from './utils';

const FormBody: React.FC<FormikProps<FormValues>> = ({
  isSubmitting,
  isValid,
}) => (
  <SubformWrapper title="dashboard.addNewLanguage.title">
    <Code
      fieldName={LanguageFieldNames.code}
      formName={FormName.language}
      required
    />
    <Name
      fieldName={LanguageFieldNames.name}
      formName={FormName.language}
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
