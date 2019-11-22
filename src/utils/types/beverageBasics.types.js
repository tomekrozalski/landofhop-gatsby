import { arrayOf, object, shape, string } from 'prop-types';

import languageValue from './languageValue.types';

export default {
  badge: string.isRequired,
  coverPhoto: shape({
    childImageSharp: shape({
      fluid: object,
    }),
  }).isRequired,
  label: shape({
    general: shape({
      brand: shape({
        badge: string.isRequired,
        name: arrayOf(languageValue).isRequired,
      }).isRequired,
      name: arrayOf(languageValue).isRequired,
    }).isRequired,
  }).isRequired,
  shortId: string.isRequired,
};
