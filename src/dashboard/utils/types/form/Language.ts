export type LanguageInput = {
  code: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
};

export type LanguageOutput = {
  code: string;
  name: {
    lang: string;
    value: string;
  }[];
};
