import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

import { pageContextTypes } from 'utils/types';

const List = styled.ul`
  display: flex;
  justify-content: center;
  max-width: var(--size-container-max-width);
  margin: 12rem auto 8rem auto;
`;

const Item = styled.li`
  margin: 0 0.5rem;
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-dark);
  background-color: var(--color-dark);
  font: 400 1.6rem / 1 var(--font-primary);
  color: var(--color-white);
`;

const ActiveButton = styled(Button)`
  transition: background-color var(--transition-default),
    color var(--transition-default);
  ${({ current }) =>
    current
      ? `
			background: var(--color-black);
			color: var(--color-white);
			border-color: var(--color-black);
		`
      : `
			background-color: var(--color-brighter);
			color: var(--color-darker);
		`}

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &.active {
    background-color: var(--color-black);
    border-color: var(--color-black);
    color: var(--color-white);
  }
`;

const InactiveButton = styled(Button)`
  cursor: not-allowed;
`;

const Pagination = ({
  humanPageNumber,
  nextPagePath,
  numberOfPages,
  previousPagePath,
}) => {
  const pages = () => {
    const arr = new Array(4).fill('');

    if (humanPageNumber <= 3) {
      return arr.reduce(acc => [...acc, acc.pop() + 1], [1]);
    }

    if (humanPageNumber + 2 >= numberOfPages) {
      return arr.reduce(acc => [...acc, acc.pop() + 1], [numberOfPages - 4]);
    }

    return arr.reduce(acc => [...acc, acc.pop() + 1], [humanPageNumber - 2]);
  };

  return (
    <List>
      <Item>
        {humanPageNumber === 1 ? (
          <InactiveButton as="span">←</InactiveButton>
        ) : (
          <ActiveButton as={Link} to={previousPagePath}>
            ←
          </ActiveButton>
        )}
      </Item>
      {humanPageNumber > 4 && (
        <>
          <Item>
            <ActiveButton as={Link} to="/">
              1
            </ActiveButton>
          </Item>
          <Item>
            <InactiveButton as="span">…</InactiveButton>
          </Item>
        </>
      )}
      {pages().map(item => (
        <Item key={item}>
          <ActiveButton
            as={Link}
            current={item === humanPageNumber ? 1 : 0}
            to={item === 1 ? '/' : `/list/${item}`}
          >
            {item}
          </ActiveButton>
        </Item>
      ))}
      {numberOfPages > humanPageNumber + 3 && (
        <>
          <Item>
            <InactiveButton as="span">…</InactiveButton>
          </Item>
          <Item>
            <ActiveButton as={Link} to={`/list/${numberOfPages}`}>
              {numberOfPages}
            </ActiveButton>
          </Item>
        </>
      )}
      <Item>
        {numberOfPages === humanPageNumber ? (
          <InactiveButton as="span">→</InactiveButton>
        ) : (
          <ActiveButton as={Link} to={nextPagePath}>
            →
          </ActiveButton>
        )}
      </Item>
    </List>
  );
};

Pagination.propTypes = pageContextTypes;

export default Pagination;
