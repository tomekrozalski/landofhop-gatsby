export type CountryInput = {
  code: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
};

export type CountryOutput = {
  code: string;
  name: {
    lang: string;
    value: string;
  }[];
};
