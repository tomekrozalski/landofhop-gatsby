export type InstitutionInput = {
  badge: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  ownedBy?: {
    label: string;
    value: string;
  };
  website?: string;
};

export type InstitutionOutput = {
  badge: string;
  name: {
    lang: string;
    value: string;
  }[];
  ownedBy?: string;
  website?: string;
};
