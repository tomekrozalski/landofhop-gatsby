import { arrayOf, number, shape, string } from 'prop-types';

export default {
  badge: string.isRequired,
  editorial: shape({
    photos: shape({
      cover: shape({
        height: number.isRequired,
        width: number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  label: shape({
    general: shape({
      brand: shape({
        badge: string.isRequired,
        name: arrayOf(
          shape({
            language: string.isRequired,
            value: string.isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  mongodb_id: string.isRequired,
  shortId: string.isRequired,
};
