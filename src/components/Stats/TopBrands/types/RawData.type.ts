export type RawData = {
  allBeverage: {
    edges: {
      node: {
        added: Date;
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
