import { AgedType as AgedTypeEnum } from 'components/BeverageDetails/utils/enums';

type AgedValue = {
  type: AgedTypeEnum[];
};

type Props = {
  index: number;
  setValue: (val: AgedValue[]) => void;
  value: AgedValue[];
};

const setType = ({ index, setValue, value }: Props) => (
  type: AgedTypeEnum,
) => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  if (target.checked) {
    setValue(
      value.map((item: AgedValue, i: number) =>
        i === index
          ? {
              ...item,
              type: [...item.type, type],
            }
          : item,
      ),
    );
  } else {
    setValue(
      value.map((item: AgedValue, i: number) =>
        i === index
          ? {
              ...item,
              type: item.type.filter((v: AgedTypeEnum) => v !== type),
            }
          : item,
      ),
    );
  }
};

export default setType;
