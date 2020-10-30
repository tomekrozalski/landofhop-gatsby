export type TopBrandsData = {
  date: string;
  brands: {
    amount: number;
    id: string;
    name: {
      language?: string;
      value: string;
    }[];
  }[];
};
