import { shape, string } from 'prop-types';

export default shape({
  language: string,
  value: string.isRequired,
}).isRequired;
