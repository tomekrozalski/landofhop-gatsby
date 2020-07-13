import styled from 'styled-components';

const ListOfOptions = styled.ul`
  display: flex;
  width: 100%;
  height: var(--size-input-height);
  background-color: var(--color-brighter);

  &.disabled {
    background-color: var(--color-brightest);
  }

  li {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-style: solid;
    border-color: var(--color-dark);
  }

  li + li {
    border-left: none;
  }

  &.disabled li {
    border-color: var(--color-bright);
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
