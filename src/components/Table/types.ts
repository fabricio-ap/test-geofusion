export type TTable = {
  columns: {
    key: keyof TData;
    title: string;
    render: (item: any) => JSX.Element;
  }[];
  data: TData[][];
};

export type TData = {
  [key: string]: string | number;
};
