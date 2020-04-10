import { FormName } from 'utils/enums';

type Props = {
  forArray?: string;
  form: FormName;
  name: string;
};

const getAnchor = ({ forArray, form, name }: Props) => {
  const base = `${form}-${name}`.toLowerCase().replace('.', '-');

  return forArray ? `${base}-0.${forArray}` : base;
};

export default getAnchor;
