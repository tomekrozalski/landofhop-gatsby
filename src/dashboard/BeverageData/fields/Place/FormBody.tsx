import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { Header } from 'elements/textPage';

import { Name } from '..';
import { Footer } from '../../elements/grids';

const FormBody = () => (
  <>
    <Header>
      <FormattedMessage id="dashboard.updateBeverage.title" />
    </Header>

    <Name formName={FormName.place} required />
    <Footer>
      <Button type="reset">
        <FormattedMessage id="dashboard.reset" />
      </Button>
      <Button type="submit">
        <FormattedMessage id="dashboard.continue" />
      </Button>
    </Footer>
  </>
);

export default FormBody;
