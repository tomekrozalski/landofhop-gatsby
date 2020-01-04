import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import { BeveragePageContext as BeveragePageContextTypes } from 'utils/types';
import {
  ActiveButton,
  InactiveButton,
  PaginationItem,
  PaginationList,
} from './elements';

const Pagination: React.FC<BeveragePageContextTypes> = ({
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
    <PaginationList>
      <PaginationItem>
        {humanPageNumber === 1
          ? <InactiveButton as="span">←</InactiveButton>
          : <ActiveButton as={Link} to={previousPagePath}>←</ActiveButton>}
      </PaginationItem>
      {humanPageNumber > 4 && (
        <>
          <PaginationItem>
            <ActiveButton as={Link} to="/">1</ActiveButton>
          </PaginationItem>
          <PaginationItem>
            <InactiveButton as="span">…</InactiveButton>
          </PaginationItem>
        </>
      )}
      {pages().map((pageValue: number) => (
        <PaginationItem key={pageValue}>
          <ActiveButton
            as={Link}
            current={pageValue === humanPageNumber ? 1 : 0}
            to={pageValue === 1 ? '/' : `/list/${pageValue}`}
          >
            {pageValue}
          </ActiveButton>
        </PaginationItem>
      ))}
      {numberOfPages > humanPageNumber + 3 && (
        <>
          <PaginationItem>
            <InactiveButton as="span">…</InactiveButton>
          </PaginationItem>
          <PaginationItem>
            <ActiveButton as={Link} to={`/list/${numberOfPages}`}>
              {numberOfPages}
            </ActiveButton>
          </PaginationItem>
        </>
      )}
      <PaginationItem>
        {numberOfPages === humanPageNumber
          ? <InactiveButton as="span">→</InactiveButton>
          : <ActiveButton as={Link} to={nextPagePath}>→</ActiveButton>}
      </PaginationItem>
    </PaginationList>
  );
};

export default Pagination;
