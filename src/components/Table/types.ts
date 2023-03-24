export type TTable = {
  data: {
    name: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
    revenue: number;
  }[][];
  limit?: number;
};

export type TTableBodyCell = {
  isLimit: boolean;
};

export type TPageButton = {
  selectedPage?: boolean;
};
