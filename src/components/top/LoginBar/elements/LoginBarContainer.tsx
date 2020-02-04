import styled from 'styled-components';
import { Form } from 'formik';

const LoginBarContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size-container-max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

export default LoginBarContainer;
