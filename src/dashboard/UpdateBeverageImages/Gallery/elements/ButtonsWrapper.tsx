import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button + button {
    margin-left: 1rem;
  }
`;

export default ButtonsWrapper;
