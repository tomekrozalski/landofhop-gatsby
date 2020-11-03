import React, { useContext } from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { ButtonBasicCSS } from 'elements';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { OpenSubform } from '../..';
import { BackToDetails, Wrapper } from '.';

const Button = styled(Link)`
  ${ButtonBasicCSS}
  padding: 0 2rem;
  background-color: var(--color-black);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-success-strong);
  }
`;

const Aside: React.FC = () => {
  const { link, setSubform } = useContext(NavigationContext);

  return (
    <Wrapper>
      {link && <BackToDetails link={link} />}
      <Button to="/manage-ingredients">
        <FormattedMessage id="dashboard.manageIngredients" />
      </Button>
      <OpenSubform
        direction="right"
        icon="language"
        label="dashboard.addNewLanguage.openButton"
        onClick={() => setSubform(SubformEnum.language)}
      />
    </Wrapper>
  );
};

export default Aside;
