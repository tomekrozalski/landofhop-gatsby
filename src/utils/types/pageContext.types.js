import { number, shape, string } from 'prop-types';

export default {
  humanPageNumber: number.isRequired,
  intl: shape({
    language: string.isRequired,
  }).isRequired,
  limit: number.isRequired,
  nextPagePath: string.isRequired,
  numberOfPages: number.isRequired,
  previousPagePath: string.isRequired,
  skip: number.isRequired,
};
