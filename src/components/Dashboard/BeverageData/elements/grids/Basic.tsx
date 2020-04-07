import styled from 'styled-components';

const Basic = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns:
    repeat(2, 45rem) repeat(2, var(--size-input-height))
    1fr;
  grid-template-rows: var(--size-input-height);
  margin-bottom: 1rem;
`;

export default Basic;
