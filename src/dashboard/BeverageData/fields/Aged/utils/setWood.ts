import { AgedWood as AgedWoodEnum } from 'components/BeverageDetails/utils/enums';

type AgedValue = {
  wood: AgedWoodEnum[];
};

type Props = {
  index: number;
  setValue: (val: AgedValue[]) => void;
  value: AgedValue[];
};

const setWood = ({ index, setValue, value }: Props) => (
  type: AgedWoodEnum,
) => ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  if (target.checked) {
    setValue(
      value.map((item: AgedValue, i: number) =>
        i === index
          ? {
              ...item,
              wood: [...item.wood, type],
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
              wood: item.wood.filter((v: AgedWoodEnum) => v !== type),
            }
          : item,
      ),
    );
  }
};

export default setWood;
