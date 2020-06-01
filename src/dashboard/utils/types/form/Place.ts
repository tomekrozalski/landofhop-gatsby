export type PlaceInput = {
  city: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  country: {
    label: string;
    value: string;
  };
  institution: {
    label: string;
    value: string;
  };
  latitude: number | null;
  longitude: number | null;
};

export type PlaceOutput = {
  city: {
    lang: string;
    value: string;
  }[];
  country: string;
  institution: string;
  latitude?: number;
  longitude?: number;
};
