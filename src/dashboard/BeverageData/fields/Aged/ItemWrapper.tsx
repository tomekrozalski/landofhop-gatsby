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
  .aged-wood,
  .aged-previous-content {
    margin: 0.5rem 0;
  }

  .aged-time {
    margin: 1rem 0;
  }

  .aged-time-input-wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: var(--size-input-height) 1fr 1fr;
  }

  .aged-previous-content-input-wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: var(--size-input-height) 1fr;
  }

  .aged-time,
  .aged-previous-content {
    label {
      display: block;
      margin: 1rem 0 0.5rem 0;

      &::after {
        content: ':';
      }
    }
  }
`;

export default ItemWrapper;
