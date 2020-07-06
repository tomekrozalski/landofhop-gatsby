import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext, NavigationContext } from 'utils/contexts';
import { styledLinkCSS } from './elements';

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  ${styledLinkCSS}
  padding: 1rem 1rem 1rem 3rem;
  position: relative;

  &:hover svg path {
    fill: var(--color-white);
  }

  svg {
    width: 1.2rem;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);

    path {
      fill: var(--color-black);
      transition: fill 0.2s;
    }
  }
`;

const Authorization: React.FC = () => {
  const { isLoggedIn, logOut } = useContext(AuthenticationContext);
  const { toggleLoginbar } = useContext(NavigationContext);

  return (
    <Wrapper>
      {isLoggedIn ? (
        <Button onClick={logOut}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 24.84">
            <path
              d="M7.5 9.84c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36
						7.5-7.5C15 13.2 11.64 9.84 7.5 9.84zM8.76 19.59c0 0.43-0.35 0.56-0.77
						0.56H7.01c-0.43
						0-0.77-0.14-0.77-0.56l0.57-2.78c-0.34-0.23-0.57-0.59-0.57-1.03 0-0.7
						0.57-1.26 1.26-1.26 0.7 0 1.26 0.57 1.26 1.26 0 0.44-0.24 0.8-0.57
						1.03L8.76 19.59z"
            />
            <path
              d="M13.37 5.94C13.37 2.66 10.74 0 7.5 0 4.26 0 1.63 2.66 1.63
						5.94v7.42H3.5V5.94c0-2.24 1.79-4.06 4-4.06 2.21 0 4 1.82 4
						4.06v2.5h0c0 0.02 0 0.03 0 0.05 0 0.36 0.29 0.64 0.64 0.64h0.59c0.36 0
						0.64-0.29 0.64-0.64 0-0.02 0-0.03 0-0.05h0V5.94z"
            />
          </svg>
          <FormattedMessage id="navbar.logOut" />
        </Button>
      ) : (
        <Button onClick={toggleLoginbar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21.15">
            <path
              d="M13.37 9.94H11.5V5.94c0-2.24-1.79-4.06-4-4.06C5.29 1.88 3.5 3.7 3.5
							5.94v4H1.63V5.94C1.63 2.66 4.26 0 7.5 0c3.24 0 5.88 2.66 5.88
							5.94V9.94z"
            />
            <path
              d="M7.5 6.15c-4.14 0-7.5 3.36-7.5 7.5 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36
							7.5-7.5C15 9.51 11.64 6.15 7.5 6.15zM8.76 15.91c0 0.43-0.35 0.56-0.77
							0.56H7.01c-0.43
							0-0.77-0.14-0.77-0.56l0.57-2.78c-0.34-0.23-0.57-0.59-0.57-1.03 0-0.7
							0.57-1.26 1.26-1.26 0.7 0 1.26 0.57 1.26 1.26 0 0.44-0.24 0.8-0.57
							1.03L8.76 15.91z"
            />
          </svg>
          <FormattedMessage id="navbar.logIn" />
        </Button>
      )}
    </Wrapper>
  );
};

export default Authorization;
