import styled from 'styled-components';
import { Form } from 'formik';

const LoginBarContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: var(--size-container-max-width);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

export default LoginBarContainer;
