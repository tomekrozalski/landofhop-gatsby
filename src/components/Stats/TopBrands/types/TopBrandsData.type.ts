export type TopBrandsData = {
  date: string;
  brands: {
    amount: number;
    badge: string;
    id: string;
    name: {
      language?: string;
      value: string;
    }[];
  }[];
};
