import * as Yup from 'yup';

export default Yup.object().shape({
  badge: Yup.string()
    .min(3)
    .required(),
  name: Yup.string()
    .min(5)
    .required(),
});
