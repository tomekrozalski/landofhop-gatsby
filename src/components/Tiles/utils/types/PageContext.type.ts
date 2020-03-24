export type PageContext = {
  humanPageNumber: number;
  intl: {
    language: string;
  };
  limit: number;
  nextPagePath: string;
  numberOfPages: number;
  pageNumber: number;
  previousPagePath: string;
  skip: number;
};
