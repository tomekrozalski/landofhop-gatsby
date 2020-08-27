import styled from 'styled-components';

const ListOfOptions = styled.ul`
  display: flex;
  width: 100%;
  height: var(--size-input-height);

  li {
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-dark);
    background-color: var(--color-brighter);
  }

  &.multivalue li + li {
    border-left: none;
  }

  &:not(.multivalue) li + li {
    margin-left: 1rem;
  }

  &.disabled li {
    border-color: var(--color-bright);
    background-color: var(--color-brightest);
  }

  label {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--size-input-height);
    color: var(--color-darker);
    cursor: pointer;
  }

  &.disabled label {
    color: var(--color-dark);
    cursor: not-allowed;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-success-strong);
    color: var(--color-white);
  }

  &.disabled input:checked + label {
    background-color: var(--color-bright);
  }
`;

export default ListOfOptions;
