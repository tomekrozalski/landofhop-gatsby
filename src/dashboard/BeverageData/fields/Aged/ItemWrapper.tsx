import styled from 'styled-components';

const ItemWrapper = styled.fieldset`
  grid-column: 2 / 3;
  border: 0.2rem solid var(--color-bright);
  padding: 1rem;

  h3 {
    margin: 0.6rem 0 2rem 0;
    font-size: 2.4rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-brighter);
  }

  .aged-type,
  .aged-wood {
    margin: 0.5rem 0;
  }

  .aged-time {
    margin: 1rem 0;
  }

  .aged-time-input-wrapper {
    display: flex;

    > * + * {
      margin-left: 1rem; /* gap: 1rem; */
    }
  }
`;

export default ItemWrapper;
