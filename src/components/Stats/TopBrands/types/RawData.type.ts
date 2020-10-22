export type RawData = {
  allBeverage: {
    edges: {
      node: {
        brand: {
          id: string;
          name: {
            language?: string;
            value: string;
          };
        };
      };
    }[];
  };
};
